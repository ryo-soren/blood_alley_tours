class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token
    

    rescue_from StandardError, with: :standard_error
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    # rescue_from Stripe::CardError, with: :stripe_payment_required

    def not_found
        render(
            json:{
                status: 404,
                errors: {
                    type: "Not Found"
                }
            },
            status: 404
        )
    end

    private

    def standard_error(error)
        logger.error(error.full_message)

        render(
            json: {
                status: 500,
                errors: [
                    {
                        type: error.class.to_s,
                        message: error.message
                    }
                ]
            },
            status: 500
        )
    end

    def record_invalid(error)
        invalid_record = error.record
        errors = invalid_record.errors.map do |field, message|
            {
                type: invalid_record.class.to_s,
                field: field.attribute,
                message: field.message
            }
        end
        render(
            json: {
                status: 422,
                errors: errors
            },
            status: 422
        )
    end

    def stripe_payment_required(e)

        render(
            json: {
                status: 402,
                errors: [
                    {
                        type: e.class.to_s,
                        message: e.error.message
                    }
                ]
            },
            status: 402
        )
    end

end

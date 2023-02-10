class Api::V1::BookingsController < Api::ApplicationController
    def show
        @booking = Booking.find(params[:id])
        render(
            json: @booking
        )
    end

    def create
        puts "Params: #{params}"
        # token = params[:token]

        @booking = Booking.new(booking_params)

        # begin
            charge = Stripe::Charge.create({
                amount: @booking.price * 100,
                currency: 'cad',
                # source: token,
                source: params[:token],
                description: "Booking #{@booking.id}"
            })
            puts "******#{charge}******"
            @booking.charge_id = charge.id
            @booking.charge_status = charge.status
            @booking.save!
            BookingMailer.new_booking(@booking).deliver_now
            # Stripe::PaymentIntent.create(params)
        #   rescue Stripe::CardError => e

        #   rescue Stripe::InvalidRequestError => e
        #     puts "*************"
        #     puts "e.error: #{e.error}"
        #     puts "*************"
        #   rescue Stripe::StripeError => e
        #     puts "Another problem occurred, maybe unrelated to Stripe."
        #   else
        # end
        
        render(
            json: {
                booking: @booking
                # charge: charge
            }
        )

    end

    private

    def booking_params
        params.require(:booking).permit(
            :first_name,
            :last_name,
            :phone_number,
            :email,
            :party_size,
            :date,
            :time,
            :price
        )
    end
end


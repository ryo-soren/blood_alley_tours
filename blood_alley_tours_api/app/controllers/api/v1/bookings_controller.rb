class Api::V1::BookingsController < Api::ApplicationController
    def show
        booking = Booking.find(params[:id])
        render(
            json: booking
        )
    end

    def create
        puts "Params: #{params}"
        booking = Booking.new(booking_params)

        if booking.save!
            
            charge = Stripe::Charge.create(
                {
                    amount: booking.price * 100,
                    currency: 'cad',
                    source: params[:token],
                    description: "Booking #{booking.id}"
                }
            )

            booking.charge_id = charge.id
            booking.charge_status = charge.status
            booking.save!

            BookingMailer.new_booking(booking).deliver_now
            
            render(
                json: {
                    booking: booking
                }
            )
        end
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


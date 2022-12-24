class Api::V1::BookingsController < Api::ApplicationController
    def show
        @booking = Booking.find(params[:id])
        render(
            json: @booking
        )
    end

    def create
        puts "Params: #{params}"
        token = params[:token]
        price = 12.50
        tax = 1.12

        @booking = Booking.new(booking_params)
        @booking.price = ((@booking.party_size * price * tax)*100)

        charge = Stripe::Charge.create({
            amount: @booking.price,
            currency: 'cad',
            source: token,
            description: "Booking #{@booking.id}"
        })

        @booking.charge_id = charge.id
        @booking.charge_status = charge.status
        @booking.save!
        BookingMailer.new_booking(@booking).deliver_now

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
            :time
        )
    end
end


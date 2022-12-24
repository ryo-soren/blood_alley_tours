class BookingMailer < ApplicationMailer
    
    def new_booking(booking)
        @booking = booking
        booking_email_address = @booking.email

        mail(
            to: booking_email_address,
            subject: "Booking Confirmation - ID##{@booking.id}"
        )
    end
end

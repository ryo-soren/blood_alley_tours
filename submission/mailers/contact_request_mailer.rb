class ContactRequestMailer < ApplicationMailer
    def new_contact_request(request)
        @request = request
        @email = @request.email

        mail(
            to: "contactusbloodalleytour@gmail.com",
            subject: "From #{@email}"
        )
    end
end

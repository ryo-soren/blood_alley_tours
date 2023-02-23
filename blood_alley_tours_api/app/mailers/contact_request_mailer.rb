class ContactRequestMailer < ApplicationMailer
    def new_contact_request(contact_request)
        @contact_request = contact_request
        @email = @contact_request.email

        mail(
            to: "contactusbloodalleytour@gmail.com",
            subject: "From #{@email}"
        )
    end
end

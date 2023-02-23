class Api::V1::ContactRequestsController < Api::ApplicationController
    def create
        contact_request = ContactRequest.new(contact_params)
    
        contact_request.save!
        ContactRequestMailer.new_contact_request(contact_request).deliver_now

        render(
          json: contact_request
        )
      end
    
      private
    
      def contact_params
        params.require(:contact_request).permit(
          :email,
          :body
        )
      end
end

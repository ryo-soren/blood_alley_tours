class Api::V1::KeysController < Api::ApplicationController
    def get_key 
        key = Stripe.api_key
        puts "Key: #{key}"
        render(
            json: key
        )
    end
end


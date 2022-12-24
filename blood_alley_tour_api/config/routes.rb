Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :bookings, only: [:show, :create]
      resources :contact_requests, only: [:create]
      get "/key", to: 'keys#get_key'
    end
    match "*unmatched_route", to: "application#not_found", via: :all
  end

end

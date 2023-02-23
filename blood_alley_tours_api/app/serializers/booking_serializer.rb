class BookingSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email, :party_size, :price

end

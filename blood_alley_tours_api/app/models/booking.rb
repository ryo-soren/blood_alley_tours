class Booking < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :phone_number, presence: true
    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, format: VALID_EMAIL_REGEX, presence: true
    validates :party_size, numericality: { greater_or_equal_to: 2 } 
    validates :date, presence: true
    validates :time, presence: true
    validates :price, numericality: true
end

class ContactRequest < ApplicationRecord
    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, format: VALID_EMAIL_REGEX, presence: true
    validates :body, presence: true
end

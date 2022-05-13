class User < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6}
    has_secure_password
end

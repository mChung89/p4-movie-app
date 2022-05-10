class ShowReviewUserSerializer < ActiveModel::Serializer
  attributes :username
  belongs_to :user
end

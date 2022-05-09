class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :rating, :review, :date
end

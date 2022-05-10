class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movie_id, :rating, :review, :date, :userinfo
  belongs_to :movie
  # belongs_to :user
  def userinfo
    object.user
  end
end

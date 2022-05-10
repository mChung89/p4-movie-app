class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :rating, :description, :image

  has_many :reviews
  
end

class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :rating, :description, :image
end

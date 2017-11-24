class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio
  has_many :paintings
end

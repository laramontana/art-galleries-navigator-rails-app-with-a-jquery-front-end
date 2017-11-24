class PaintingSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :style
  belongs_to :artist, serializer: PaintingArtistSerializer
end

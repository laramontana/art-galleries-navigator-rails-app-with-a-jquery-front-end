class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :city, :price
  has_many :paintings, serializer: PaintingSerializer
end

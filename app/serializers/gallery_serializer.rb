class GallerySerializer < ActiveModel::Serializer
  has_many :paintings, serializer: PaintingSerializer
end

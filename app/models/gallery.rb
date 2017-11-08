class Gallery < ApplicationRecord
  has_many :paintings
	has_many :artists, through: :paintings, class_name: 'User'
  validates :title, presence: true
  validates :title, uniqueness: true
  validates :city, presence: true
  validates :price, presence: true
  validates :painting_ids, presence: { message: "Please select at least one of your paintings" }


  def self.cities
    self.all.collect {|gallery| gallery.city}.uniq
  end

  def self.sort_by_city(city)
    self.where(city: city)
  end

  def self.sort_by_style(style)
    self.includes(:paintings).where(paintings: { style: style })
  end

  def painting=(painting_attributes)
    if painting_attributes[:title].present? || painting_attributes[:year].present? || painting_attributes[:style].present?
        painting = Painting.create(painting_attributes)
        self.paintings << painting
      end
  end

end

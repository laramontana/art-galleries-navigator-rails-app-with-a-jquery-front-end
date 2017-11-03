class Gallery < ApplicationRecord
  has_many :paintings
	has_many :artists, through: :paintings, class_name: 'User'
  validates :title, presence: true
  validates :title, uniqueness: true
  validates :city, presence: true
  validates :price, presence: true

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
    painting = Painting.create(painting_attributes)
    self.paintings << painting
  end

end

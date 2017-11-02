class Gallery < ApplicationRecord
  has_many :paintings
	has_many :artists, through: :paintings, class_name: 'User'


  def self.cities
    self.all.collect {|gallery| gallery.city}.uniq
  end

  def self.sort_by_city(city)
    self.where(city: city)
  end

  def self.sort_by_style(style)
    self.includes(:paintings).where(paintings: { style: style })
  end

end

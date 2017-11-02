class Painting < ApplicationRecord
  belongs_to :artist, class_name: 'User'
	belongs_to :gallery

  validates :title, presence: true
  validates :title, uniqueness: true
  validates :year, presence: true
  validates :style, presence: true

  def self.styles
    self.all.collect {|painting| painting.style}.uniq
  end

end

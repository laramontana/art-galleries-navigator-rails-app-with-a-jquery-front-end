class Painting < ApplicationRecord
  belongs_to :artist, class_name: 'User'
	belongs_to :gallery
end

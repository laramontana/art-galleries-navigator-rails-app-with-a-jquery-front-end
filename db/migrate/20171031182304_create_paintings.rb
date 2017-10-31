class CreatePaintings < ActiveRecord::Migration[5.1]
  def change
    create_table :paintings do |t|
      t.string :title
      t.integer :year
      t.string :style
      t.integer :gallery_id
      t.integer :artist_id

      t.timestamps
    end
  end
end

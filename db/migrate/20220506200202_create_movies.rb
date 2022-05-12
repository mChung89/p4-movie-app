class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :release_date
      t.float :rating
      t.text :description
      t.string :image
      t.string :imdb

      t.timestamps
    end
  end
end

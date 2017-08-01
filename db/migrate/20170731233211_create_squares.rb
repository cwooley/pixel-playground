class CreateSquares < ActiveRecord::Migration[5.1]
  def change
    create_table :squares do |t|
      t.integer :x
      t.integer :y
      t.string :color, default: "rgb(0,0,0)"
    end
  end
end

class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.string :band
      t.string :year
      t.string :link

      t.timestamps
    end
  end
end

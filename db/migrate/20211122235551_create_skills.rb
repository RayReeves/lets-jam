class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.belongs_to :user, null: false
      t.belongs_to :instrument, null: false

      t.timestamps
    end
  end
end

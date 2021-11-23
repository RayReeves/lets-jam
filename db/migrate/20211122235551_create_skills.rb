class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.belongs_to :users, null: false
      t.belongs_to :instruments, null: false

      t.timestamps
    end
  end
end

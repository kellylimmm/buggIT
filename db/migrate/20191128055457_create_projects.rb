class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.integer :user_id
      t.date :start_date
      t.date :end_date
      t.string :status
      t.timestamps
    end
  end
end
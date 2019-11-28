class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.string :bug_title
      t.integer :project_id
      t.text :issue_log
      t.date :due_date
      t.string :priority
      t.boolean :status, default:false
      t.text :issue_resolved
      t.string :severity
      t.timestamps
    end
  end
end
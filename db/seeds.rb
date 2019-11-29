# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Project.create!(project_title: "Project 1", user_id: 1, start_date: "2019-11-10", end_date: "2019-11-26", status: "Active")
# Project.create!(project_title: "Project 2", user_id: 1, start_date: "2019-11-10", end_date: "2019-11-26", status: "Cancelled")


# Project.create!(user_id: 1)
# Project.create!(start_date: "2019-11-10")
# Project.create!(end_date: "2019-11-26")
# Project.create!(status: "Cancelled")


Bug.create!(bug_title: "Bug 1", project_id: 1, issue_log:"Syntax Error", due_date: "2019-11-15", priority:"Low", status: "Cancelled", issue_resolved:"Remove comma")


# Project.create!(status: "Active")
# Project.create!(status: "In Progress")
# Project.create!(status: "Delayed")
# Project.create!(status: "Cancelled")
# Project.create!(status: "On Hold")
# Project.create!(status: "Completed")

# Bug.create!(priority: "Low")
# Bug.create!(priority: "Medium")
# Bug.create!(priority: "High")

# Bug.create!(severity: "Minor")
# Bug.create!(severity: "Major")
# Bug.create!(severity: "Critical")
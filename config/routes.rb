Rails.application.routes.draw do
  resources :bugs
  devise_for :users
  get 'projects/index'
  resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/projects' => 'projects#react'

end
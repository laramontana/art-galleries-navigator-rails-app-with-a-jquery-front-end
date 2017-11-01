Rails.application.routes.draw do
  get 'painting/new'

  get 'artists/index'

  get 'artists/show'

  devise_for :users
  root to: "galleries#index"
  resources :galleries, :artists
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

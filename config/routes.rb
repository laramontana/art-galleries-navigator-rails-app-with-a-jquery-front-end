Rails.application.routes.draw do
  devise_for :users
  root to: "galleries#index"
  resources :galleries, :artists

  resources :galleries, only: [:show, :index] do
    resources :paintings, only: [:new, :create]
  end
end

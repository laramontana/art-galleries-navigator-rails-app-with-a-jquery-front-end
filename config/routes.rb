Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", registrations: 'registrations' }

  root to: "galleries#index"
  resources :galleries, :artists


  resources :galleries, only: [:show] do
    resources :paintings, only: [:new, :create]
  end

  resources :artists, only: [:show] do
    resources :paintings, only: [:index]
  end


end

Rails.application.routes.draw do
  resources :reviews
  resources :users, only: [:index, :create]

  resources :movies, only: [:create, :index]
=======
  resources :movies
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

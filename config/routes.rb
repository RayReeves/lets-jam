Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "homes#index"

  get '/users' =>"users#index", :as => :user_root
  get '/search' =>"users#index"
  get '/chats' =>"users#index"
  get '/users/:username' =>"users#index"
    
  namespace :api do
    namespace :v1 do
      resources :instruments, only: [:index]
      resources :users, only: [:index, :show]
    end
  end 

  resources :users, only: [:index, :show, :edit, :update]
  resources :instruments, only: [:index, :show]

end

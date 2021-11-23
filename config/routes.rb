Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "homes#index"
  
  namespace :api do
    namespace :v1 do
      resources :instruments, only: [:index]
      resources :users, only: [:index]
    end
  end 

  resources :users, only: [:index]
  resources :instruments, only: [:index, :show]

end

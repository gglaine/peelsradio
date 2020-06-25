Rails.application.routes.draw do

  devise_for :users
  devise_for :models
  get 'pages/life'
  root 'welcome#index'
  get 'welcome/index'
  get 'life', to: 'pages#life'
  get 'selected', to: 'pages#selected'
  get 'timeline', to: 'sessions#timelineup'
  get 'sixties', to: 'sessions#sixties'
  resources :sessions




  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

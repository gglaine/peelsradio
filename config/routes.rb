Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  devise_for :models
  get 'pages/life'
  root 'welcome#index'
  get 'welcome/index'
  get 'life', to: 'pages#life'
  get 'selected', to: 'pages#selected'
  get 'timeline', to: 'sessions#timelineup'
  get 'sixties', to: 'sessions#sixties'
  get 'seventies', to: 'sessions#seventies'
  get 'lateseventies', to: 'sessions#lateseventies'
  get 'eighties', to: 'sessions#eighties'
  get 'lateeighties', to: 'sessions#lateeighties'
  get 'nineties', to: 'sessions#nineties'
  get 'latenineties', to: 'sessions#latenineties'
  get 'oos', to: 'sessions#oos'
  get 'explore', to: 'sessions#explore'
  resources :sessions




  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

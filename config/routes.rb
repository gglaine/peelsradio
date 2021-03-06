Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  devise_scope :user do
    match '/sessions/user', to: 'devise/sessions#create', via: :post
  end

  resources :sessions do
    member do
      post 'toggle_favorite', to: "sessions#toggle_favorite"
    end
  end

  root 'welcome#index'
  get 'welcome/index'

#pages
  get 'explore', to: 'sessions#explore'
  get 'life', to: 'pages#life'
  get 'selected', to: 'pages#selected'
  get 'mypeels', to: 'sessions#mypeels'

# timeline
  get 'sixties', to: 'sessions#sixties'
  get 'seventies', to: 'sessions#seventies'
  get 'lateseventies', to: 'sessions#lateseventies'
  get 'eighties', to: 'sessions#eighties'
  get 'lateeighties', to: 'sessions#lateeighties'
  get 'nineties', to: 'sessions#nineties'
  get 'latenineties', to: 'sessions#latenineties'
  get 'oos', to: 'sessions#oos'

# genres
  get 'blues', to: 'sessions#blues'
  get 'brit', to: 'sessions#brit'
  get 'coldwave', to: 'sessions#coldwave'
  get 'electronic', to: 'sessions#electronic'
  get 'folk', to: 'sessions#folk'
  get 'heavymetal', to: 'sessions#heavymetal'
  get 'reggae', to: 'sessions#reggae'
  get 'rock', to: 'sessions#rock'
  get 'punk', to: 'sessions#punk'





  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

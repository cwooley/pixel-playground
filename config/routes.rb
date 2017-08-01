Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :squares, only: [:index, :update]

  root to: 'pages#index'

  mount ActionCable.server, at: "/cable"
end

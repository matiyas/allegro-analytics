Rails.application.routes.draw do
  root 'main#index'

  match "/*path", to: "main#index", format: false, via: :get
end

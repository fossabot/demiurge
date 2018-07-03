defmodule DemiurgeWeb.Router do
  use DemiurgeWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", DemiurgeWeb do
    pipe_through :api
    
    get "/about", AboutController, :index
  end

  scope "/", DemiurgeWeb do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end
end

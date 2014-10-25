# Controller used to create and destroy sessions
class SessionsController < ApplicationController
  # Used as callback for omniauth
  def create
    user = User.from_omniauth(env['omniauth.auth'])
    session[:user_id] = user.id
    redirect_to root_path
  end

  # Signs user out by destroying sessions
  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end

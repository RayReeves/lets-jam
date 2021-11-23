class Api::V1::UsersController < ApplicationController
  def index
    if current_user
      render json: current_user
    else
      render json: {}, staus: 401
    end
  end
  
  def show
    render json: User.all
  end
end
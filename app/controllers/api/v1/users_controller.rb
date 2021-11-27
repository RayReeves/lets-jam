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

  def update
    binding.pry
    @user = current_user

    if @user.update(user_params)
      render json: current_user, status: 200
    end
  end

  private

  def user_params
    params[:user].permit(:first_name, :last_name, :bio, :zip_code, :instruments, :id, :username)
  end

end
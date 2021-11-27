class UsersController < ApplicationController
  def index
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user

    if @user.update(user_params)
      flash[:notification] = "Updated profile"
      redirect_to users_path
    else
      flash.now[:error] = @user.errors.full_messages.to_sentence
      render :edit
    end
  end

  private 

  def user_params
    params[:user].permit(:first_name, :last_name, :bio, :zip_code, :username, :instruments, instrument_ids:[])
  end

end
class Api::V1::UsersController < ApplicationRecord
  def show
    if current_user
      render json: current_user
    else
      render json: {}, staus: 401
    end
  end
end
class Api::V1::MessagesController < ApplicationController
  def show
    render json: Message.all.where(chat_id: params[:id])
  end
end
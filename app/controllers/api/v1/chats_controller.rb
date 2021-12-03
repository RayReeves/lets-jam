class Api::V1::ChatsController < ApplicationController
  
  def show
    render json: Chat.find(params[:id])
  end

  def create
    chat = Chat.new(chat_params)
    if chat.save
      ownership1 = UserChat.new()
      ownership1.chat_id = chat.id
      ownership1.user_id = params["sender_id"]
      ownership1.save
      ownership2 = UserChat.new()
      ownership2.chat_id = chat.id
      ownership2.user_id = params["receiver_id"]
      ownership2.save

      render json: chat
    end
  end

  private

  def chat_params
    params[:chat].permit(:title, :sender_id, :receiver_id)
  end
end
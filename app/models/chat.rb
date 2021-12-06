class Chat < ApplicationRecord
  validates :title, uniqueness: true

  has_many :messages
  has_many :user_chats
  has_many :users, through: :user_chats
end
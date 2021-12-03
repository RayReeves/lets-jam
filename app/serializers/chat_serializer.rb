class ChatSerializer < ActiveModel::Serializer
  attributes :id, :users, :messages
end

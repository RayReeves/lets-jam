class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :bio, :zip_code, :instruments, :profile_photo, :chats
end

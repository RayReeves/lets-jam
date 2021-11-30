class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :zip_code, presence: true

  has_many :skills
  has_many :instruments, through: :skills

  mount_uploader :profile_photo, ProfilePhotoUploader
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

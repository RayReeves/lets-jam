class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :zip_code, presence: true

  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

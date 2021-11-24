class Instrument < ApplicationRecord
  validates :musical_instrument, presence: true

  has_many :skills
  has_many :users, through: :skills
  
end
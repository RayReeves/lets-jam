class Instrument < ApplicationRecord
  validates :instrument, presence: true
  
end
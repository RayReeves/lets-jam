class Api::V1::InstrumentsController < ApplicationRecord
  def index
    render json: Instrument.all
  end
end
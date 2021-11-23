class Api::V1::InstrumentsController < ApplicationController
  def index
    render json: Instrument.all
  end
end
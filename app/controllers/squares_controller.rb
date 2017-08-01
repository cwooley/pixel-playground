class SquaresController < ApplicationController
  protect_from_forgery with: :exception

  def index
    @squares = Square.all
    render json: @squares
  end

end

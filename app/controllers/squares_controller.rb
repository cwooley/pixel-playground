class SquaresController < ApplicationController
  protect_from_forgery with: :exception

  def index
    @squares = Square.all
    render json: @squares
  end

  def update
    square = Square.find(params[:id])
    square.update(color: params[:color])
  end
end

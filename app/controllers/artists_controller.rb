class ArtistsController < ApplicationController
  before_action :set_artist, only: :show

  def index
    @artists = User.all
  end

  def show
  end

  def set_artist
    @artist = User.find(params[:id])
  end


end

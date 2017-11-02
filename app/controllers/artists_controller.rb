class ArtistsController < ApplicationController
  before_action :authenticate_user!

  def index
    @artists = User.all
  end

  def show
    @artist = User.find(params[:id])
  end

  def edit
    @artist = User.find(params[:id])
  end

end

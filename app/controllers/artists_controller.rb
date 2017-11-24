class ArtistsController < ApplicationController
  before_action :authenticate_user!

  def index
    @artists = User.all
  end

  def show
    @artist = User.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @artist, serializer: ArtistSerializer }
    end
  end

  def edit
    @artist = User.find(params[:id])
  end

  def update
    @artist = User.find(params[:id])
    @artist.update(artist_params)
    redirect_to artist_path(@artist), :flash => { :success => "Your bio was successfully updated!" }
  end

  private
    def artist_params
      params.require(:user).permit(:bio)
    end

end

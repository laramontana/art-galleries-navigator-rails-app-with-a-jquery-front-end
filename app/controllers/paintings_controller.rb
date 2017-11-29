class PaintingsController < ApplicationController
  before_action :authenticate_user!

  def new #new_gallery_painting GET    /galleries/:gallery_id/paintings/new
    @gallery = Gallery.find_by(id: params[:gallery_id])
    if @gallery
      @painting = @gallery.paintings.build
    else
      redirect_to galleries_path, :flash => { :error => "Gallery is not found" }
    end
  end

  def create # gallery_paintings_path POST   /galleries/:gallery_id/paintings
    @gallery = Gallery.find_by(id: params[:gallery_id])
    @painting = @gallery.paintings.build(painting_params)
    if @painting.save
      redirect_to gallery_path(@gallery), :flash => { :success => "Painting was successfully added!" }
    else
      render :new
    end
  end

  def index #artist_paintings_path GET    /artists/:artist_id/paintings /galleries/:galery_id/paintings
    if params[:artist_id]
      @artist = User.find_by(id: params[:artist_id])
      @paintings = @artist.paintings
    elsif params[:gallery_id]
      @gallery = Gallery.find(params[:gallery_id])
      @paintings = @gallery.paintings
    end

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @paintings }
    end
  end

private
  def painting_params
    params.require(:painting).permit(:title, :year, :style, :artist_id)
  end

end

class PaintingsController < ApplicationController

  def new #new_gallery_painting GET    /galleries/:gallery_id/paintings/new
    @gallery = Gallery.find_by(params[:gallery_id])
    @painting = @gallery.paintings.build
  end

  def create
    @gallery = Gallery.find_by(params[:gallery_id])
    if @gallery
    # gallery_paintings_path POST   /galleries/:gallery_id/paintings
  end

private
  def painting_params
    params.require(:painting).permit(:title, :year, :style, :artist_id)
  end

end

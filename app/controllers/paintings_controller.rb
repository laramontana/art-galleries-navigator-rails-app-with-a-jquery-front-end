class PaintingsController < ApplicationController

  def new #new_gallery_painting GET    /galleries/:gallery_id/paintings/new
    @gallery = Gallery.find_by(params[:gallery_id])
  end

  def create # gallery_paintings_path POST   /galleries/:gallery_id/paintings
  end

end

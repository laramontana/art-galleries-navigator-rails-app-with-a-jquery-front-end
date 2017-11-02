class GalleriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @cities = Gallery.cities
    @styles = Painting.styles
    if !params[:city].blank?
      @galleries = Gallery.sort_by_city(params[:city])
    elsif !params[:style].blank?
      @galleries = Gallery.sort_by_style(params[:style])
    else
      @galleries = Gallery.all
    end
  end

  def show
    @gallery = Gallery.find(params[:id])
  end

  def new
    @gallery = Gallery.new
    @painting = @gallery.paintings.build
  end

  def create
    @gallery = Gallery.create(gallery_params)
    redirect_to gallery_path(@gallery)
  end

  private
    def gallery_params
      params.require(:gallery).permit(:title, :city, :price, paintings_attributes: [:title, :year, :style, :artist_id])
    end

end

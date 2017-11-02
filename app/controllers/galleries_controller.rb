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
    @gallery.paintings.build
  end

  def create
    raise params.inspect
  end

end

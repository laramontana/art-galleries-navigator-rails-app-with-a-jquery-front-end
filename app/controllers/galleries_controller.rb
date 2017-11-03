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
    @paintings = current_user.paintings
  end

  def create
    @gallery = Gallery.new(gallery_params)
    if @gallery.save
      redirect_to gallery_path(@gallery)
    else
      render :new
    end
  end

  private
    def gallery_params
      params.require(:gallery).permit(:title, :city, :price,
                                      painting_ids:[],
                                      :painting_attributes => [:artist_id, :title, :style, :year])
    end


end

class GalleriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @cities = Gallery.cities
    if !params[:city].blank?
      @galleries = Gallery.sort_by_city(params[:city])
    else
      @galleries = Gallery.all
    end
  end

  def show
    @gallery = Gallery.find(params[:id])
  end

end

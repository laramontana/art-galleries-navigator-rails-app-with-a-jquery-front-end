class GalleriesController < ApplicationController
  before_action :authenticate_user!

  def index
    if !params[:city].blank?
      @galleries_with_uniq_cities = ObjectModel.all.to_a.uniq{ |o| o.city}
      @galleries = Gallery.sort_by_city(params[:city])
    else
      @galleries = Gallery.all
    end
  end

  def show
    @gallery = Gallery.find(params[:id])
  end

end

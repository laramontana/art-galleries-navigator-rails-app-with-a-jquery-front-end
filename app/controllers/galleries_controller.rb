class GalleriesController < ApplicationController
  before_action :authenticate_user! 

  def index
    @galleries = Gallery.all
  end

  def show
    @gallery = Gallery.find(params[:id])
  end

end

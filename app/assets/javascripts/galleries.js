$(document).ready(function(){
  attachGalleriesListeners();
});

function Gallery(attributes) {
  this.id = attributes.id;
  this.title = attributes.title;
  this.city = attributes.city;
  this.price = attributes.price;
};

Gallery.prototype.getNewGalleryHTML = function() {
  var template = Handlebars.compile($("#new-gallery-template").html());
  $(".new-gallery").html(template(this));
};

function attachGalleriesListeners(){
  $(".js-now-at-gallery").on("click", showGalleryPaintings);
  $(".js-new-gallery-form").on("submit", showNewGallery);
};

function showGalleryPaintings(e) {
  e.preventDefault();
  var galleryId = $(this).data("id");
  $.get("/galleries/" + galleryId + ".json", (paintingsJSON) =>
    paintingsJSON.sort(sortPaintings)
    .map(paintingJSON => new Painting(paintingJSON))
    .forEach(painting => painting.getGalleryPaintingsHTML())
  );
};

function showNewGallery(e) {
  e.preventDefault();
  var formValues = $(this).serialize();
  this.reset();
  $.post("/galleries.json", formValues, function(galleryJSON) {
    var gallery = new Gallery(galleryJSON)
    gallery.getNewGalleryHTML();
    attachGalleriesListeners();
  });
};

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
  $.get("/galleries/" + galleryId + "/paintings.json", function(paintingsJSON) {

    paintingsJSON.sort(function(painting1, painting2){
      if painting1.title.toUpperCase()
    })

    for (var i = 0; i < paintingsJSON.length; i++) {
      for(var n = 0; n < paintingsJSON.length - 1; i++) {
        var firstItem = paintingsJSON[n]
        var nextItem = paintingsJSON[n + 1]
        if (firstItem.value < nextItem.value) {
          paintingsJSON[n] = nextItem
          paintingsJSON[n + 1] = firstItem
        }
      }
    }


    paintings = paintingsJSON.map(function(paintingJSON) { return new Painting(paintingJSON) });
    paintings.forEach(function(painting) { painting.getGalleryPaintingsHTML() });
  });
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

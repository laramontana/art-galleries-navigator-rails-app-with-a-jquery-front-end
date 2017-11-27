$(document).ready(function(){
  attachPaintingsListeners();
});

function Painting(attributes) {
  this.id = attributes.id;
  this.title = attributes.title;
  this.artistName = attributes.artist.name;
};

Painting.prototype.getGalleryPaintingsHTML = function () {
  var template = Handlebars.compile($("#now-at-gallery-template").html());
  $(".now-at-gallery-ul").append(template(this));
};

Painting.prototype.getArtistPaintingsHTML = function () {
  var template = Handlebars.compile($("#painting-template").html());
  $(".painting-container").append(template(this));
};

function attachPaintingsListeners(){
  $(document).on("click", ".js-artist-paintings", showArtistPaintings);
};

function showArtistPaintings(e) {
  console.log('im getting called')
  e.preventDefault();
  var artistId = $(this).data("id");
  $.get("/artists/" + artistId + "/paintings.json", function(paintingsJSON) {
    paintings = paintingsJSON.map(function(paintingJSON) { return new Painting(paintingJSON) });
    paintings.forEach(function(painting) { painting.getArtistPaintingsHTML() });
  });
};

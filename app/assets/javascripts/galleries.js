$(document).on("turbolinks:load", function(){
  attachGalleriesListeners();
});

function attachGalleriesListeners(){
  $(".js-now-at-gallery").on("click", showGalleryPaintings);
  $(".js-new-gallery-form").on("submit", showNewGallery);
};

function showGalleryPaintings(e) {
  e.preventDefault();
  var id = $(this).data("id");
  $.get("/galleries/" + id + ".json", function(paintings) {
    var template = Handlebars.compile(document.getElementById("now-at-gallery-template").innerHTML);
    var result = template(paintings);
    $(".now-at-gallery-ul")[0].innerHTML = result;
  });
};

function showNewGallery(e) {
  e.preventDefault();
  var values = $(this).serialize();
  this.reset();
  $.post("/galleries.json", values, function (gallery) {
    var template = Handlebars.compile(document.getElementById("new-gallery-template").innerHTML);
    $(".new-gallery")[0].innerHTML = template(gallery);
    attachGalleriesListeners();
  })
}

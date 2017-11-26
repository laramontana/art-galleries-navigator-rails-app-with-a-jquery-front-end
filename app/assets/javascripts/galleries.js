$(document).on("turbolinks:load", function(){
  attachGalleriesListeners();
});

function attachGalleriesListeners(){
  $(".js-now-at-gallery").on("click", showGalleryPaintings)
  $(".js-new-gallery-form").on("submit", showNewGallery)
};

function showGalleryPaintings(e) {
  e.preventDefault();
  var id = $(this).data("id");
  $.get("/galleries/" + id + ".json", function(paintings) {

    var template = Handlebars.compile(document.getElementById("now-at-gallery-template").innerHTML);
    for(var i=0;i<paintings.length;i++) {
      var result = template(paintings[i]);
      $(".now-at-gallery-ul")[0].innerHTML += result;
    };
  });
};

function showNewGallery(e) {
  e.preventDefault();
  var values = $(this).serialize();

  $.post("/galleries.json", values, function (gallery) {
    var template = Handlebars.compile(document.getElementById("new-gallery-template").innerHTML);
    $(".new-gallery")[0].innerHTML = template(gallery);
    $(".js-now-at-gallery").on("click", showGalleryPaintings)
  })

}

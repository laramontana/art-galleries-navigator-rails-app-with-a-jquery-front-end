$(document).on("turbolinks:load", function(){
  attachListeners();
});

  function attachListeners(){
    $(".js-artist-paintings").on("click", showPaintings)
    $(".js-now-at-gallery").on("click", showGalleryPaintings)
    $(".js-new-gallery-form").on("submit", showNewGallery)
  };

  function showPaintings(e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.get("/artists/" + id + "/paintings.json", function(json) {
      var template = Handlebars.compile(document.getElementById("painting-template").innerHTML);
      for(var i=0;i<json.length;i++) {
        var result = template(json[i]);
        $(".painting-container")[0].innerHTML += result;
      };
    });
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
      debugger
    })

  }

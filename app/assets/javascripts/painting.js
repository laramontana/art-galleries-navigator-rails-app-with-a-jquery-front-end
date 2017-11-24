$(document).on("turbolinks:load", function(){
  attachListeners();
});

  function attachListeners(){
    $(".js-artist-paintings").on("click", showPaintings)
    $(".js-next").on("click", nextArtist)
    $(".now-at-gallery").on("click", showGalleryInfo)
    $('.now-at-gallery').unbind('click', true);
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

  function nextArtist(e) {
    e.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/artists/" + nextId + ".json", function(nextArtist) {
      $(".artistName").text(nextArtist.name);

      $(".artistBio").text(nextArtist.bio);
      $(".js-artist-paintings").attr("data-id", nextArtist.id);
      $(".js-artist-paintings")[0].pathname = "/artists/" + nextArtist.id + "/paintings"
      $(".js-artist-paintings")[0].innerHTML = nextArtist.name + " paintings"
      $(".js-next").attr("data-id", nextArtist.id);
      $(".painting-container")[0].innerHTML = ''
      if (parseInt($("body").attr("data-user")) !== nextArtist.id) {
        $(".edit-bio").remove();
        $(".add-bio").remove();
      }
      if (parseInt($("body").attr("data-last-user")) === nextArtist.id) { $(".js-next").remove(); }
    });
  };

  function showGalleryInfo(e) {
    e.preventDefault();
    var id = $(this).data("id");
    $.get("/galleries/" + id + ".json", function(paintings) {

      var template = Handlebars.compile(document.getElementById("now-at-gallery-template").innerHTML);
      for(var i=0;i<paintings.length;i++) {
        var result = template(paintings[i]);
        $(".now-at-gallery-ul")[0].innerHTML += result;
      };

    })

  }

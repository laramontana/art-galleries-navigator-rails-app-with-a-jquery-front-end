$(document).on("turbolinks:load", function(){
  attachListeners();
});

  function attachListeners(){
    $(".js-artist-paintings").on("click", showPaintings)
    $(".js-next").on("click", nextArtist)
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
    $.get("/artists/" + nextId + ".json", function(data) {
      $(".artistName").text(data.name);
      $(".artistBio").text(data.bio);
      $(".js-artist-paintings").attr("data-id", data.id);
      $(".js-artist-paintings")[0].pathname = "/artists/" + data.id + "/paintings"
      $(".js-artist-paintings")[0].innerHTML = data.name + " paintings"
      $(".js-next").attr("data-id", data["id"]);
      $(".painting-container")[0].innerHTML = ''
    });
  };

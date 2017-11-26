$(document).on("turbolinks:load", function(){
  attachPaintingsListeners();
});

  function attachPaintingsListeners(){
    $(".js-artist-paintings").on("click", showPaintings)
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

$(document).on("turbolinks:load", function(){
  attachPaintingsListeners();
});

function attachPaintingsListeners(){
  $(".js-artist-paintings").on("click", showPaintings);
};

function showPaintings(e) {
  e.preventDefault();
  var id = $(this).data("id");
  $.get("/artists/" + id + "/paintings.json", function(paintings) {
    var template = Handlebars.compile(document.getElementById("painting-template").innerHTML);
    var result = template(paintings);
    $(".painting-container")[0].innerHTML = result;
  });
};

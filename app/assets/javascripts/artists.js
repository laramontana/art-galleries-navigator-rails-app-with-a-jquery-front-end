$(document).on("turbolinks:load", function(){
  attachArtistsListeners();
});

function attachArtistsListeners(){
  $(".js-next").on("click", nextArtist)
};

function nextArtist(e) {
  e.preventDefault();
  attachPaintingsListeners()
  var nextId = parseInt($(".js-next").attr("data-id")) + 1;
  $.get("/artists/" + nextId + ".json", function(nextArtist) {
    var template = Handlebars.compile(document.getElementById("artist-info-template").innerHTML);
    $(".artist-container")[0].innerHTML = template(nextArtist);

    if (parseInt($("body").attr("data-user")) !== nextArtist.id) {
      $(".edit-bio").remove();
      $(".add-bio").remove();
    }
    if (parseInt($("body").attr("data-last-user")) === nextArtist.id) { $(".js-next").remove(); }
  });
};

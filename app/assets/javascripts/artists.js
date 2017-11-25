$(document).on("turbolinks:load", function(){
  attachArtistsListeners();
});

function attachArtistsListeners(){
  $(".js-next").on("click", nextArtist)
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

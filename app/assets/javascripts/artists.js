$(document).on("turbolinks:load", function(){
  attachArtistsListeners();
});

function attachArtistsListeners(){
  $(".js-next").on("click", nextArtist);
};

function nextArtist(e) {
  e.preventDefault();
  var nextId = parseInt($(".js-next").attr("data-id")) + 1;
  $.get("/artists/" + nextId + ".json", function(nextArtist) {
    var template = Handlebars.compile(document.getElementById("artist-info-template").innerHTML);
    $(".artist-container")[0].innerHTML = template(nextArtist);
    attachArtistsListeners();
    attachPaintingsListeners();
    hideArtistShowLinks(nextArtist);
  });
};

function hideArtistShowLinks(artist) {
  hideArtistPaintingsLink()
  hideNext(artist)
  hideEdit(artist)
}

function hideArtistPaintingsLink() {
  var id = parseInt($(".artistName").attr("data-id"));
  $.get("/artists/" + id + "/paintings.json", function(paintings) {
    if (paintings.toString() == [].toString()) {
      $(".js-artist-paintings")[0].innerHTML = "No paintings yet";
    };
  });
};

function hideNext(artist) {
 if (parseInt($("body").attr("data-last-user")) === artist.id) {
   $(".js-next").remove();
 };
};

function hideEdit(artist) {
 if (parseInt($("body").attr("data-user")) !== artist.id) {
   $(".edit-bio").remove();
 } else {
   $(".artistBio").append(`<p><a class="edit-bio" href="/artists/${artist.id}/edit">Edit Bio</a>`)
 }
};

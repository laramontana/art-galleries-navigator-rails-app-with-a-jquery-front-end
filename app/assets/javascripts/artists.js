$(document).on("turbolinks:load", function(){
  attachArtistsListeners();
});

function Artist(attributes) {
  this.id = attributes.id;
  this.name = attributes.name;
  this.bio = attributes.bio;
};

Artist.prototype.getArtistInfoHTML = function() {
  var template = Handlebars.compile($("#artist-info-template").html());
  $(".artist-container").html(template(this));
};

function attachArtistsListeners(){
  $(".js-next").on("click", nextArtist);
};

function nextArtist(e) {
  e.preventDefault();
  var nextId = parseInt($(".js-next").attr("data-id")) + 1;
  $.get("/artists/" + nextId + ".json", function(nextArtist) {
    var artist = new Artist(nextArtist)
    artist.getArtistInfoHTML();
    attachArtistsListeners();
    attachPaintingsListeners();
    hideArtistShowLinks(nextArtist);
  });
};

function hideArtistShowLinks(artist) {
  hideArtistPaintingsLink();
  hideNext(artist);
  hideEdit(artist);
};

function hideArtistPaintingsLink() {
  var artistId = parseInt($(".artistName").attr("data-id"));
  $.get("/artists/" + artistId + "/paintings.json", function(paintings) {
    if (paintings.toString() == [].toString()) { $(".js-artist-paintings").html("No paintings yet") };
  });
};

function hideNext(artist) {
 if (parseInt($("body").attr("data-last-user")) === artist.id) { $(".js-next").remove() };
};

function hideEdit(artist) {
 if (parseInt($("body").attr("data-user")) !== artist.id) {
   $(".edit-bio").remove();
 } else {
   $(".artistBio").append(`<p><a class="edit-bio" href="/artists/${artist.id}/edit">Edit Bio</a>`);
 };
};

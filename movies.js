/** @format */

$(document).ready(function () {
  /// standard update local storage function for the list items
  function updateLocalStorage() {
    localStorage.setItem(
      "movies",
      JSON.stringify(
        Array.from($("ul li")).map((movie) => $(movie).text().trim())
      )
    );
  }
  //standard retrive local storage items for the ul
  if (localStorage.getItem("movies")) {
    JSON.parse(localStorage.getItem("movies")).forEach((movie) => {
      addListItem();
    });
  }
  //function for to generate li's
  function addListItem() {
    $("ul").append(
      $("<li>")
        .text(`${$("#title").val()} - ${$("#rating").val()}/10  `)
        .append(
          $("<button>")
            .text("x")
            .addClass("delete")
            .on("click", function () {
              $(this).parent().remove();
              updateLocalStorage();
            })
        )
    );
  }
  //function to create list item on button click
  $("#post").on("click", function (e) {
    if ($("#title").val().length < 2) {
      alert(
        "Title must Contain at least 2 letters, sorry to the 215 movies that don't!"
      );
      return;
    }
    addListItem();
    $(".movie-form")[0].reset();
    $("#ratingValue").text(0.0);
    updateLocalStorage();
  });
  //function to display range value and control its movement
  $("#rating")
    .on("input", function () {
      $("span").text(
        parseFloat($(this).val()) === 10
          ? parseFloat($(this).val()).toFixed(0)
          : parseFloat($(this).val()).toFixed(1)
      );
    })
    .trigger("input");
});

/** @format */

$(document).ready(function () {
  function updateLocalStorage() {
    localStorage.setItem(
      "movies",
      JSON.stringify(
        Array.from($("ul li")).map((movie) => $(movie).text().trim())
      )
    );
  }

  $("#rating")
    .on("input", function () {
      $("span").text(
        parseFloat($(this).val()) === 10
          ? parseFloat($(this).val()).toFixed(0)
          : parseFloat($(this).val()).toFixed(1)
      );
    })
    .trigger("input");

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

  $("#post").on("click", function (e) {
    e.preventDefault();
    if ($("#title").val().length < 2) {
      alert("Title must Contain at least 2 letters");
      return;
    }
    addListItem();
    $(".movie-form")[0].reset();
    $("#ratingValue").text(0.0);
    updateLocalStorage();
  });

  if (localStorage.getItem("movies")) {
    JSON.parse(localStorage.getItem("movies")).forEach((movie) => {
      addListItem();
    });
  }
});

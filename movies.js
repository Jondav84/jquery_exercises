/** @format */

//for the slider input to be displayed as the input value is adjusted
$("#rating")
  .on("input", function () {
    $("span").text(
      parseFloat($(this).val()) === 10
        ? parseFloat($(this).val()).toFixed(0)
        : parseFloat($(this).val()).toFixed(1)
    );
  })
  .trigger("input");

$("#post").on("click", function (e) {
  e.preventDefault();
  if ($("#title").val().length < 2) {
    alert("Title must Contain at least 2 letters");
    return;
  }
  $("ul").append(
    $("<li>")
      .text(`${$("#title").val()} - ${$("#rating").val()}/10  `)
      .append($("<button>").text("  x  ").addClass("delete"))
  );
  $(".movie-form")[0].reset();
  $("#ratingValue").text(0.0);
});

$("ul").on("click", ".delete", function () {
  $(this).parent().remove();
});

/** @format */

/******   PART ONE   ********/

// 1:
$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!");

  // 2:
  $("article img").addClass("image-center");

  // 3:
  $("article p").last().remove();

  // 4:
  $("#title").css("font-size", Math.floor(Math.random() * 101) + "px");
  // 5:
  // A:
  $("ol li")
    .eq(1)
    .after("<li>The colors with letters and numbers hurt my brain.</li>");
  //B:
  $("ol").append($("<li>").text("I love puppy smell!"));

  // 6:
  $("aside")
    .empty()
    .append(
      $("<p>").text(
        `I dont know what came over me. 
      That list was completely uncalled for. 
      This is a professional institution for crying out loud.
      I am so glad to be rid of it, and so should you. 
      One last thing, please forgive my terrible grammar!`
      )
    );

  // 7:
  $("#r, #g, #b")
    .on("input", function () {
      $("body").css(
        "background-color",
        `rgb(${$("#r").val()},${$("#g").val()},${$("#b").val()})`
      );
    })
    .trigger("input");

  // 8:
  $("img").on("click", function () {
    $(this).remove();
  });
});

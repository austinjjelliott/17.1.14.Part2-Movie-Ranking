$("document").ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    let movieName = $("#movie-name").val();
    let movieRank = $("#ranking").val();

    let newListItem = $("<li>").text(
      $("#movie-name").val() + " has a ranking of " + movieRank + " out of 10"
    );
    let removeBtn = $("<button>").text("Remove").addClass("remove");

    newListItem.append(removeBtn);
    $("#movies-list").append(newListItem);

    $("#movie-name").val("");
    $("#ranking").val("");
  });

  $("#movies-list").on("click", ".remove", function () {
    $(this).parent().remove();
  });
});

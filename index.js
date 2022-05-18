$(document).ready(function () {
  // popup-1
  $("#btn-1-next").click(function () {
    $("#popup-2").show();
    $("#popup-1").hide();
  });

  $("#btn-2-prev").click(function () {
    $("#popup-1").show();
    $("#popup-2").hide();
  });

  $("#btn-2-next").click(function () {
    $("#popup-1").hide();
    $("#popup-2").hide();
    $("#popup-3").show();
  });

  $("#btn-3-prev").click(function () {
    $("#popup-1").hide();
    $("#popup-2").show();
    $("#popup-3").hide();
  });

  $("#btn-3-next").click(function () {
    $("#popup-1").hide();
    $("#popup-2").show();
    $("#popup-3").hide();
  });

  $("#option-1").click(function () {
    $(this).toggleClass("option-selected");
    $("#option-A").toggleClass("option");
  });

  $("#option-2").click(function () {
    $(this).toggleClass("option-selected");
    $("#option-B").toggleClass("option");
  });

  $("#option-3").click(function () {
    $(this).toggleClass("option-selected");
    $("#option-C").toggleClass("option");
  });

  $("#option-4").click(function () {
    $(this).toggleClass("option-selected");
    $("#option-D").toggleClass("option");
  });
});

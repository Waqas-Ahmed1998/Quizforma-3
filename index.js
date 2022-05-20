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

    var option1Input = $("#option-1-input");
    option1Input.prop("checked", !option1Input.prop("checked"));
    console.log(option1Input.is(":checked"));
  });

  $("#option-2").click(function () {
    $(this).toggleClass("option-selected");
    $("#option-B").toggleClass("option");

    var option2Input = $("#option-2-input");
    option2Input.prop("checked", !option2Input.prop("checked"));
    console.log(option2Input.is(":checked"));
  });

  $("#option-3").click(function () {
    $(this).toggleClass("option-selected");
    $("#option-C").toggleClass("option");

    var option3Input = $("#option-3-input");
    option3Input.prop("checked", !option3Input.prop("checked"));
    console.log(option3Input.is(":checked"));
  });

  $("#option-4").click(function () {
    $(this).toggleClass("option-selected");
    $("#option-D").toggleClass("option");

    var option4Input = $("#option-4-input");
    option4Input.prop("checked", !option4Input.prop("checked"));
    console.log(option4Input.is(":checked"));
  });

  // input check
});

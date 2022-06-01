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

  // Satified popup
  $("form").submit(function (e) {
    e.preventDefault();
  });
  $(".bar-btn").click(function () {
    $(this).toggleClass("highlight-satisfied");
  });

  // Second select option poppup
  $("#popup-11-option-1 ").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-1-text-color").toggleClass("popup-11-text ");

    $("#popup-11-choice-1").toggle();
  });

  $("#popup-11-option-2").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-2-text-color").toggleClass("popup-11-text ");
    $("#popup-11-choice-2").toggle();
  });

  $("#popup-11-option-3").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-3-text-color").toggleClass("popup-11-text ");
    $("#popup-11-choice-3").toggle();
  });

  $("#popup-11-option-4").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-4-text-color").toggleClass("popup-11-text ");
    $("#popup-11-choice-4").toggle();
  });

  // popup-14 options

  $("#popup-14-option-1").click(function () {
    $("#popup-14-option-1 span:first-child").toggleClass(
      "popup-14-selected-option"
    );
    $("#popup-14-option-1 svg").toggle();
  });

  $("#popup-14-option-2").click(function () {
    $("#popup-14-option-2 span:first-child").toggleClass(
      "popup-14-selected-option"
    );
    $("#popup-14-option-2 svg").toggle();
  });

  $("#popup-14-option-3").click(function () {
    $("#popup-14-option-3 span:first-child").toggleClass(
      "popup-14-selected-option"
    );
    $("#popup-14-option-3 svg").toggle();
  });

  $("#popup-14-option-4").click(function () {
    $("#popup-14-option-4 span:first-child").toggleClass(
      "popup-14-selected-option"
    );
    $("#popup-14-option-4 svg").toggle();
  });
});

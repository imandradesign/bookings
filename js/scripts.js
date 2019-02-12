$(document).ready(function() {
  $("#booking-form form").submit(function(event) {
    var fullNameInput = $("input#full-name").val();
    var dateInput = $("input#date").val();
    var startTimeInput = $("input#start-time").val();
    var endTimeInput = $("input#end-time").val();

    $(".full-name").text(fullNameInput);
    $(".date").text(dateInput);
    $(".start-time").text(startTimeInput);
    $(".end-time").text(endTimeInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});

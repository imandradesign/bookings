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



$("#address-form form").submit(function(event){
  var nameInput = $("input#name").val().charAt(0).toUpperCase() + $("input#name").val().slice(1);
  var phoneInput = $("input#phone").val();
  var emailInput = $("input#e-mail").val();
  var streetAddressInput= $("input#street-address").val();
  var cityInput = $("input#city").val().charAt(0).toUpperCase() + $("input#city").val().slice(1);
  var stateInput = $("input#state").val().toUpperCase();
  var zipCodeInput = $("input#zip-code").val();

  $(".name").text(nameInput);
  $(".phone").text(phoneInput);
  $(".e-mail").text(emailInput);
  $(".street-address").text(streetAddressInput);
  $(".city").text(cityInput);
  $(".state").text(stateInput);
  $(".zip-code").text(zipCodeInput);

  $("#contact-list").show();

  event.preventDefault();
  });


  $("#name-click").click(function(){
    $("li").show();
 });
});

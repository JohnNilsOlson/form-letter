$(document).ready(function() {
  $("#name").submit(function(event) {
    const firstnameInput = $("input#firstname").val();
    const lastnameInput = $("input#lastname").val();
    const streetInput = $("input#street").val();
    const cityInput = $("input#city").val();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);

    $("#letter").show();

    event.preventDefault();
  });
});
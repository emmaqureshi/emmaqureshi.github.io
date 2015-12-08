// This code runs when the page loads
$(function() {

  $(".animal").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().remove();
    // we can also write it like this.remove
    console.log(elementThatWasClicked);
  })

})
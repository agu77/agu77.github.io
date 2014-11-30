$(document).ready(function() {
    $('.nav-item').click(function() { 
        var selection = $(this).text();
        $('.nav-item').removeClass("active");
        if (selection == "Home") {
            $(this).addClass("active");
        }
        if (selection == "About Me") {
            $(this).addClass("active");
        }
        if (selection == "Contact") {
            $(this).addClass("active");
        }
    
    $( "#target" ).scroll(function() {
    $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
        }
  });
});
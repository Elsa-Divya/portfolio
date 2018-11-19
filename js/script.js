

$(document).ready(function(){

      // Add smooth scrolling to all links
  $("#sidebar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    
    $("#sidebar li").click(function(){
        $("#sidebar .active").removeClass("active");
        $(this).addClass("active");
    })



    $(".progress").hover(function(){
        $(this).toggleClass("slideInUp");
    });

    var images = ["img/dance.png","img/work.png","img/painting.png"];
    var chatImage = ["img/chat2.png","img/chat1.png"];
   
    var i = 0;
    setInterval(function(){
        
       $("#slideShow").attr("src",images[i]);       
       i++;
       if(i==images.length){
           i = 0;
       }
    },2000)

   function sendMail(){

   }

    
})
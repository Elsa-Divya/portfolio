

$(document).ready(function(){
    
    $("#sidebar li").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    })

    $("#fixedSidebar li").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    })

    $(".progress").hover(function(){
        $(this).toggleClass("slideInUp");
    });

    var images = ["img/dance.png","img/work.png","img/painting.png"];
   
    var i = 0;
    setInterval(function(){
        
       $("#slideShow").attr("src",images[i]);
       
       
       i++;
       if(i==images.length){
           i = 0;
       }
    },2000)

    
})
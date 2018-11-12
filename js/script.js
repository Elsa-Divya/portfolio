

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

   var skillsprogressbar = $(".progress-bar-striped");
   $.each(skillsprogressbar,function(index,bar){
       var actualValue = $(this).attr("style").split(":")[1].split("%")[0];
       var initialValue = "0";
       
       
       
   })
})
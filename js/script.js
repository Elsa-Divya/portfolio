

$(document).ready(function(){
    $("#sidebar li").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    })

    $("#fixedSidebar li").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    })
})
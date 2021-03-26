let aboutOffset=$("#about").offset().top;

console.log (aboutOffset);

$(window).scroll(function(){

    let wScroll=$(window).scrollTop();
    
    if (wScroll > aboutOffset-100)
    {
        console.log("hi");
        $("nav").css("background","rgba(0,0,0,.9)");
        $("nav").css("padding","10px 0px");
        $("#btnUp").fadeIn(500);
        
    }
    else
    {
        $("nav").css("background","transparent");
        $("nav").css("padding","0px 0px");
        $("#btnUp").fadeOut(500);
    }

})
//---when click arrow--
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},2000);
}
)
//when click link on nav
$("a[href^='#']").click(function(eventInfo){

    let aHref=$(eventInfo.target).attr("href");
    let sectionOffset=$(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},2000);
})

/*  this script for 
implementation of typed.js */

if ($(".text-slider").length == 1) {

var typed_strings =
$(".text-slider-items").text();

var typed = new Typed(".text-slider", {
strings: typed_strings.split(", "),
typeSpeed: 50,
loop: true,
backDelay: 900,
backSpeed: 30,
});
} 

/*=========counter-----------*/
$('.count-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
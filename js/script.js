
window.onscroll = function showHeader() {

    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
};
let header =    document.querySelector(".header");


$(".burger").on("click",()=>{
    $('.burger').toggleClass('show-menu');
    $('.nav-items').toggleClass('show')
});
$(".nav-items a").on("click",()=>{
    $('.burger').removeClass('show-menu');
    $('.nav-items').removeClass('show')
});

$(document).ready(function(){
    $(".reviews-slider").owlCarousel({
        items: 2,
        loop:true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            991:{
              items:2
            }
        }
    });
});
$(document).ready(function(){
    $(".slide-gallery").owlCarousel({
        items: 5,
        loop:true,
        dots: true,

    });
});


/*
let bigVideo = document.getElementById('item-full');
let subVideo = document.getElementById('preview-box').getElementsByTagName("iframe");

for (let i = 0; i < subVideo.length; i ++) {
    subVideo[i].addEventListener("click", full);}
function full() {
    let videoSrc = this.getAttribute('src');

    bigVideo.innerHTML = "<iframe  src="+videoSrc+">";
}
*/





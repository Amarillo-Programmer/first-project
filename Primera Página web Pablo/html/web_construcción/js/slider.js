let sliderInner=document.querySelector(".slider--inner");

let images=sliderInner.querySelectorAll("img");

let index=0;

setInterval(function(){
    let percentage=index*-100;
    sliderInner.style.transform="translateX("+percentage+"%)";
    index++;
    if (index>images.length-1) {
        index=0;
    }
},4000);
let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-80px";  // Adjust this value to the height of your navbar
    } else {
    // Scrolling up
    navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});







var imageno =1;
displayimg(imageno);

// var autoSlide = setInterval(() => nextimg(1), 4000);


function nextimg(n){
    displayimg(imageno += n)
}

function CurrentSlide(n) {
    displayimg(imageno = n)
}

function displayimg(n){
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if(n > image.length){
        imageno = 1;
    }
    if(n < 1){
        imageno = image.length;
    }
    for(i=0; i<image.length; i++){
        image[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className =  dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display ="block";
    dots[imageno - 1].className += " active";
}








var imageno2 =1;
displayimg2(imageno2);


function nextimg2(n){
    displayimg2(imageno2 += n)
}

function CurrentSlide2(n) {
    displayimg2(imageno2 = n)
}

function displayimg2(n){
    var i;
    var image2 = document.getElementsByClassName("image2");
    var dots2 = document.getElementsByClassName("buttonsforbox3");

    if(n > image2.length){
        imageno2 = 1;
    }
    if(n < 1){
        imageno2 = image2.length;
    }
    for(i=0; i<image2.length; i++){
        image2[i].style.display = "none";
    }
    for(i=0; i<dots2.length; i++){
        dots2[i].className =  dots2[i].className.replace(" active2", "");
    }

    image2[imageno2 - 1].style.display ="block";
    dots2[imageno2 - 1].className += " active2";
}






var imageno3 =1;
displayimg3(imageno3);


function nextimg3(n){
    displayimg3(imageno3 += n)
}

function CurrentSlide3(n) {
    displayimg3(imageno3 = n)
}

function displayimg3(n){
    var i;
    var image3 = document.getElementsByClassName("image3");
    var dots3 = document.getElementsByClassName("buttonsforbox4");

    if(n > image3.length){
        imageno3 = 1;
    }
    if(n < 1){
        imageno3 = image3.length;
    }
    for(i=0; i<image3.length; i++){
        image3[i].style.display = "none";
    }
    for(i=0; i<dots3.length; i++){
        dots3[i].className =  dots3[i].className.replace(" active2", "");
    }

    image3[imageno3 - 1].style.display ="block";
    dots3[imageno3 - 1].className += " active2";
}
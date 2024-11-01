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

var autoSlide = setInterval(() => nextimg(1), 4000);


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




// let imageno = 1;

// function CurrentSlide(n) {
//     imageno = n;
//     updateSlide();
// }

// function updateSlide() {
//     const sliderContainer = document.querySelector('.slider-container');
//     const totalImages = document.querySelectorAll('.image').length / 2; // Since we duplicated the images
//     const offset = -(imageno - 1) * 100; // Calculate offset for each slide

//     sliderContainer.style.transform = `translateX(${offset}%)`;
//     sliderContainer.style.animation = 'none'; // Stop CSS animation

//     // Restart animation after a short delay
//     setTimeout(() => {
//         sliderContainer.style.animation = 'scroll 20s linear infinite';
//     }, 100); // Small delay to allow the reset to take effect
// }

// Optional: Add event listeners for manual navigation buttons

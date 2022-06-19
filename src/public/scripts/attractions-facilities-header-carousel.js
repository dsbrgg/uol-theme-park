let slideIndex = 0;
showSlides();

function showSlides() {
    let i;

    let slides = document.getElementsByClassName("attractions-facilities-header-slides");

    let dots = document.getElementsByClassName("attractions-facilities-header-carousel-dot");

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    } 

    for (i = 0; i < dots.length; i++) 
    {
    dots[i].className = dots[i].className.replace(" attractions-facilities-header-carousel-active", "");
    }

    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " attractions-facilities-header-carousel-active";

    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
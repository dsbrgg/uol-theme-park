let article_slide_index = 1;

//js for article 1
article_show_slides_1(article_slide_index);

function article_plus_slides_1(n) 
{
    article_show_slides_1(article_slide_index += n);
}

function article_show_slides_1(n) 
{
    let i = 0;

    let slides = document.getElementsByClassName("article-1-mySlides");

    if (n > slides.length) 
    {
    article_slide_index = 1
    } 

    if (n < 1) 
    {
    article_slide_index = slides.length
    }

    for (i = 0; i < slides.length; i++) 
    {
    slides[i].style.display = "none";  
    }

    slides[article_slide_index-1].style.display = "block"; 
}

//js for article 2
article_show_slides_2(article_slide_index);

function article_plus_slides_2(n) 
{
    article_show_slides_2(article_slide_index += n);
}

function article_show_slides_2(n) 
{
    let i = 0;

    let slides = document.getElementsByClassName("article-2-mySlides");

    if (n > slides.length) 
    {
    article_slide_index = 1
    } 

    if (n < 1) 
    {
    article_slide_index = slides.length
    }

    for (i = 0; i < slides.length; i++) 
    {
    slides[i].style.display = "none";  
    }

    slides[article_slide_index-1].style.display = "block"; 
}

//js for article 3
article_show_slides_3(article_slide_index);

function article_plus_slides_3(n) 
{
    article_show_slides_3(article_slide_index += n);
}

function article_show_slides_3(n) 
{
    let i = 0;

    let slides = document.getElementsByClassName("article-3-mySlides");

    if (n > slides.length) 
    {
    article_slide_index = 1
    } 

    if (n < 1) 
    {
    article_slide_index = slides.length
    }

    for (i = 0; i < slides.length; i++) 
    {
    slides[i].style.display = "none";  
    }

    slides[article_slide_index-1].style.display = "block"; 
}

//js for article 1, 2, 3
function article_current_slide(n) 
{
    article_show_slides(article_slide_index = n);
}
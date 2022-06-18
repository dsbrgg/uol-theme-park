let article_slide_index = 1;

//js for article
function loading_article_imgs() 
{
    // for article 1
    article_plus_slides(-1, 'attractions-facilities-article-1-slides')
    article_plus_slides(1, 'attractions-facilities-article-1-slides')

    // for article 2
    article_plus_slides(-1, 'attractions-facilities-article-2-slides')
    article_plus_slides(1, 'attractions-facilities-article-2-slides')

    // for article 3
    article_plus_slides(-1, 'attractions-facilities-article-3-slides')
    article_plus_slides(1, 'attractions-facilities-article-3-slides')

    // for article 4
    article_plus_slides(-1, 'attractions-facilities-article-4-slides')
    article_plus_slides(1, 'attractions-facilities-article-4-slides')

}

article_show_slides(article_slide_index);

function article_plus_slides(n, a) 
{
    article_show_slides(article_slide_index += n, a);
}

function article_show_slides(n, b) 
{
    let i = 0;

    let slides = document.getElementsByClassName(b);

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

//js for article
function article_current_slide(n) 
{
    article_show_slides(article_slide_index = n);
}
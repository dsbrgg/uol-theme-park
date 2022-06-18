let articleSlideIndex = 1;

//js for article
function loadingArticleImgs() {
    // for article 1
    articlePlusSlides(-1, 'attractions-facilities-article-1-slides');
    articlePlusSlides(1, 'attractions-facilities-article-1-slides');

    // for article 2
    articlePlusSlides(-1, 'attractions-facilities-article-2-slides');
    articlePlusSlides(1, 'attractions-facilities-article-2-slides');

    // for article 3
    articlePlusSlides(-1, 'attractions-facilities-article-3-slides');
    articlePlusSlides(1, 'attractions-facilities-article-3-slides');

    // for article 4
    articlePlusSlides(-1, 'attractions-facilities-article-4-slides');
    articlePlusSlides(1, 'attractions-facilities-article-4-slides');

}

articleShowSlides(articleSlideIndex);

function articlePlusSlides(n, a) {
    articleShowSlides(articleSlideIndex += n, a);
}

function articleShowSlides(n, b) {
    let slides = document.getElementsByClassName(b);

    if (n > slides.length) 
    {
        articleSlideIndex = 1
    } 

    if (n < 1) 
    {
        articleSlideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    slides[articleSlideIndex-1].style.display = "block"; 
}

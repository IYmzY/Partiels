const myArticles = document.querySelectorAll('article')
const hiddArticle = document.querySelector('.hiddArticle')

myArticles.forEach(article => {
    article.addeventlistener("click", () => {
        hiddArticle.style.display = "block";
    })
});

hiddArticle.addeventlistener("click", () => {
    hiddArticle.style.display = "none";
})

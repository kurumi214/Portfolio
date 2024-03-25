const newsList = [
    {
        date: "2024.1.1",
        text: "2024年もよろしくお願いいたします!"
    },
    {
        date: "2024.2.12",
        text: "キャンペーン第２弾開催!"
    },
    {
        date: "2024.3.13",
        text: "ゲーム機器の修理を開始します!"
    },
    {
        date: "2024.4.14",
        text: "デバイストラブルのランキングを発表します!",
    }
]

window.addEventListener("load", (e) => {
    let newsCounter = 0

    setInterval(() => {
        newsCounter++
        document.getElementsByClassName("l-news-article")[0].style.animation = "newsSlideOut 1s"


        setTimeout(() => {
            document.getElementsByClassName("l-news-article")[0].style.animation = ""
            document.getElementsByClassName("l-news-page")[0].innerHTML = (1 + (newsCounter % newsList.length)) + " / " + newsList.length

            document.getElementsByClassName("l-news-article")[0].
            innerHTML = `
                <a href="#" class="l-news-article-slide">
                    <span class="l-news-article-slide-date">
                    ` + newsList[newsCounter % newsList.length].date +`
                    </span>
                    <div class="l-news-article-slide-txt">
                        ` + newsList[newsCounter % newsList.length].text +`
                    </div>
                    <div class="l-news-article-slide-more">
                    </div>
                </a>
            `
        }, 500)
    }, 3000)
})
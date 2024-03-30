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

const resultList = [
    {
      "year": 2024,
      "date": "01.20",
      "img": "./images/result1.jpg",
      "alt": "iPhoneスクリーン故障",
      "title": "画面が割れてしまったスマホを修理させていただきました",
      "text": "１度目の落下で画面ガラスが割れてしまい、２度目の落下で画面と基板を繋ぐケーブルが切れてしまい 画面が取れたアイフォン１１ の修理となります！"
    },
    {
      "year": 2024,
      "date": "02.12",
      "img": "./images/result2.jpg",
      "alt": "iPhone故障",
      "title": "どんなに画面がバキバキでも諦めないでください！",
      "text": "iPhoneをナビ代わりにバイクにつけられていたそうですが、固定が甘かったのか走っている最中に落ちてしまい、さらにさらに運悪く後続の車にまで轢かれてしまったそうで、、、"
    },
    {
      "year": 2024,
      "date": "03.20",
      "img": "./images/result3.jpg",
      "alt": "iPad障",
      "title": "液晶の表示不良もお任せください",
      "text": "液晶の表示不良は液晶交換で直ることがほとんどです（稀に基板に問題がある場合もありますが。。）今回作業させて頂いたお客様の液晶表示不良のタブレットは液晶交換で綺麗に元通りでございます！"
    },
    {
      "year": 2024,
      "date": "04.28",
      "img": "./images/result1.jpg",
      "alt": "iPhoneスクリーン障",
      "title": "充電できなくなってしまっても修理可能です！",
      "text": "今回のお客様は充電ができないことに加え、バッテリーの減りも気になられていたので、一緒に交換ご依頼を頂戴いたしました！！上の写真を見ても最大容量が75%とかなり劣化しており、重要なメッセージも表示されていおりました"
    },
    {
      "year": 2024,
      "date": "04.28",
      "img": "./images/result4.jpg",
      "alt": "スマホ充電",
      "title": "バッテリー交換もお任せください！",
      "text": "XperiaやGalaxy、Googleピクセル、AQUOS、ASUS、HUAWEI、OPPOなど画面修理やバッテリー交換、基板入替による修理などお受けいたしております！"
    }
]





window.addEventListener("DOMContentLoaded", (e) =>  {
    let newsCounter = 0
    let currentResult = 0


    let getResultMargin = () => {
        if (window.innerWidth < 767)
            return 0
        return 250
    }

    document.onNextBtn = () => {
        currentResult++
        if (currentResult > (resultList.length - 1))
            currentResult = 0
        document.getElementById("result-0").style = "margin-left: " + (getResultMargin() + -currentResult * (365 + 50) - 1) + "px;"
        document.getElementsByClassName("l-result-page")[0].
        innerHTML = (1 + currentResult) + "/" + resultList.length 
    }
    document.onPrevBtn = () => {
        currentResult--
        if (currentResult < 0)
            currentResult = (resultList.length - 1)
        document.getElementById("result-0").style = "margin-left: " + (getResultMargin() + -currentResult * (365 + 50) - 1) + "px;"
        document.getElementsByClassName("l-result-page")[0].
        innerHTML = (1 + currentResult) + "/" + resultList.length 
    }
    

    resultList.map((result, index) => {
        let style = ""
        if (index === 0) {
            style = ` style="margin-left: ` + getResultMargin() +`px;"`
        }

        document.getElementsByClassName("l-result-container")[0].
        innerHTML += `
        <div class="l-result-col" id="result-` + index +`"` + style +`>
            <div class="l-result-col-top">
                <div class="l-result-col-date">
                ` + result.year +`<br>
                ` + result.date +`
                </div>
                <img src="` + result.img +`" alt="` + result.alt +`">
            </div>
            <a href="#">
                <div class="l-result-col-ttl">
                    ` + result.title +`
                </div>
            </a>
            <div class="l-result-col-txt">
                ` + result.text +`
            </div>
        </div>`

        document.getElementsByClassName("l-result-page")[0].
        innerHTML = (1 + currentResult) + "/" + resultList.length 
    })

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
                    ` + newsList[newsCounter % newsList.length].date +`fff
                    </span>
                    <div class="l-news-article-slide-block">
                        <div class="l-news-article-slide-txt">
                            ` + newsList[newsCounter % newsList.length].text +`
                        </div>
                        <div class="l-news-article-slide-more"></div>
                    </div>
                </a>
            `
        }, 500)
    }, 3000)
})

/////////////
window.onscroll = (e) => {
    const windowHeight = window.innerHeight
    const textRect = document.getElementsByClassName("p-copy-lead")[0].getBoundingClientRect()

    if (windowHeight >= textRect.top) {
        let diff = windowHeight - textRect.top
        let progress = 100 -  diff * 300 / windowHeight
        document.getElementsByClassName("p-copy-lead")[0].style = "transform: translateX(" + progress + "%)"
    } else {
        document.getElementsByClassName("p-copy-lead")[0].style = "transform: translateX(100%)"
    }

}

///// Footer helper function
function toggleFooter(id) {
    console.log(id)

    // 1st Get element by ID
    const Element = document.getElementById(id)

    // 2nd check that className if it is active
    if (Element.className === "l-footer-menu-col-li l-footer-menu-col-li-active") {
        // 3rd remove active from the class name
        Element.className = "l-footer-menu-col-li"
    } else {
        //4th if not active add it
        Element.className += " l-footer-menu-col-li-active"
    }
}
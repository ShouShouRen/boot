$('.top').on("click", function (event) {
    $("html,body").scrollTop(0);
})

$(document).ready(function () {
    $(".collapse-box").on("click", function (event) {
        event.preventDefault();
        if ($(event.target).hasClass("collapse-title")) {
            $(event.target).parent(".collapse-box").toggleClass("active");
            $(event.target).siblings(".collapse-content").slideToggle("300");
        }
    });
});



const changes = [{
    "userNum": "10000",
    "basePrice": 600,
    "proPrice": 1600,
},
{
    "userNum": "15000",
    "basePrice": 1200,
    "proPrice": 2400,
},
{
    "userNum": "20000",
    "basePrice": 1800,
    "proPrice": 3200,
},
{
    "userNum": "25000",
    "basePrice": 2400,
    "proPrice": 4000,
},
{
    "userNum": ">25000",
    "basePrice": 3000,
    "proPrice": 4800,
}
]

$(document).ready(function () {
    $('button.btn-price').on("click",function () {
        $('.btn-price').removeClass('active');
        const idx = $(this).attr('index')
        $(this).addClass('active');
        $('p.text-subtitle-pri').text(changes[idx].userNum)
        $('.base > p.base-price').text(changes[idx].basePrice)
        $('.pro > .pro-price').text(changes[idx].proPrice)
    });
});


function initSwiper() {
    /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    */
    const swiper = new Swiper("#comment-swiper", {
      /*  預設要顯示幾個卡片 */
      slidesPerView: 1,
      /* 斷點設定 */
      breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
          slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        768: {
          slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
          slidesPerView: 1
        }
      },
      /* 卡片元素的間隔 */
      spaceBetween: 16,
      pagination: {
        /* 我想將分頁圓點綁在哪個 class */
        el: ".swiper-pagination",
        /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true
      }
    });
  }
  
  /* 觸發自己定義的函式 */
  initSwiper();
  
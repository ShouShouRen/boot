$('.top').on("click", function (event) {
    $("html,body").scrollTop(0);
})

$(document).ready(function () {
    $(".collapse-title").on("click", function (event) {
        console.log($(event.target))
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
        const idx = $(this).index()
        $('p.text-subtitle-pri').text(changes[idx].userNum)
        $('.base > p.base-price').text(changes[idx].basePrice)
        $('.pro > .pro-price').text(changes[idx].proPrice)
    });
});
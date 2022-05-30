$('.top').on("click", function (event) {
    $("html,body").scrollTop(0);
})

$(document).ready(function () {
    $("body").on("click", function (event) {
        console.log($(event.target))
        event.preventDefault();
        if ($(event.target).hasClass("collapse-title")) {
            $(event.target).parent(".collapse-box").toggleClass("active");
            $(event.target).siblings(".collapse-content").slideToggle("300");
        }
    });
});
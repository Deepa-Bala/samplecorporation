window.addEventListener('DOMContentLoaded', event => {
$(function() {
    $("#navbarResponsive ul li a").on("click", function() {
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
});

});

$(document).ready(function () {
    $('.more-btn').click(function () {
        var $this = $(this);
        var $infoWrap = $this.siblings('.content-wrapper');
        var currentHeight = $infoWrap.outerHeight();
        var newHeight = (currentHeight === 360) ? $infoWrap.get(0).scrollHeight : 360;

        $infoWrap.animate({
            height: newHeight
        }, 700);

        
        $this.toggleClass('active');
    });
});






AOS.init({
    duration: 1000,
    disable: 'mobile',
    easing: 'ease-in-out',
    once: true,
});
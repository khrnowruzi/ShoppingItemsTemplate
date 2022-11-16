$(function () {
    var firstListOfContent = $('#firstListOfContent');
    var countFirstListOfContent = $('#firstListOfContent > li').length * 20;
    var tempCountFirstListOfContent = 0;
    var clockFirstListOfContent;

    beginfirstListOfContent();

    $('#firstListOfContent > li').hover(function () {
        clearInterval(clockFirstListOfContent);
    }, function () {
        beginfirstListOfContent();
    });

    function beginfirstListOfContent() {
        clockFirstListOfContent = setInterval(function () {
            tempCountFirstListOfContent += 20;
            if (tempCountFirstListOfContent == countFirstListOfContent)
                tempCountFirstListOfContent = 0;
            firstListOfContent.animate({ top: -tempCountFirstListOfContent }, 1000);
        }, 3000);
    };
    $("[data-toggle='tooltip']").tooltip({ animate: true });
});
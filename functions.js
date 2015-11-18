location.hash = ''; //make sure the page initializes on the first page...

var addSearchEventHandler = function() {
    $(".search-button").click(function (e) {
        var text = $(this).prev().val();
        window.location.hash = "#/regions/" + text;
        $(".search-button").prev().val(text);
        e.preventDefault();
    });
};

var showSplash = function () {
    $(".splash").show();
    $("#topSearch, #infoBoxGrid").hide();
};

var hideSplash = function () {
    $(".splash").hide();
    $("#topSearch, #infoBoxGrid").show();
};


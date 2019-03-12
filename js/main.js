$(document).ready(function () {
    setTimeout(function () {
        $(".se-pre-con").fadeOut("slow");
    }, 3500);
    function setUpCarousel() {
        if ($(window).width() >= 800) {
            $(".carousel-inner .hide-md").removeClass("item");
            $(".carousel-inner .hide-md").removeClass("item");
        } else if ($(window).width() < 800 && $(window).height() > 350) {
            $(".carousel-inner .hide-md").addClass("item");
            $(".carousel-inner .hide-md").addClass("item");
        }
        var $item = $('.carousel .item');
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight);
        $item.addClass('full-screen');
        $('.carousel img').each(function () {
            var $src = $(this).attr('src');
            var $color = $(this).attr('data-color');
            $(this).parent().css({
                'background-image': 'url(' + $src + ')',
                'background-color': $color
            });
            $(this).remove();
        });
        $('.carousel').carousel({
            interval: 4000,
            pause: "true"
        });
    }
    function validateForm() {
        var is_valid = true;
        $(".form-group").removeClass("has-error");
        $(".form-group span").removeClass("has-error");
        if (!$("#inputName").val().trim().match("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$") || $("#inputName").val().length > 40) {
            is_valid = false;
            $("#inputName").parent().addClass("has-error");
            $("#inputName").next("span").addClass("has-error");

        }
        if (!$("#inputEmail").val().match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
            is_valid = false;
            $("#inputEmail").parent().addClass("has-error");
            $("#inputEmail").next("span").addClass("has-error");
        }
        if (!$("#inputPhone").val().trim().match("^[0-9-()+ ]*$") || $("#inputPhone").val().trim().length < 7 || $("#inputPhone").val().trim().length > 20) {
            is_valid = false;
            $("#inputPhone").parent().addClass("has-error");
            $("#inputPhone").next("span").addClass("has-error");
        }
        if (!$("#inputMessage").val().trim().length) {
            is_valid = false;
            $("#inputMessage").parent().addClass("has-error");
            $("#inputMessage").next("span").addClass("has-error");
        }
        return is_valid;
    }
    setUpCarousel();
    //var resizeTimer;
    $(window).on('resize', function () {
        console.log("Page resized");
        var $item = $('.carousel .item');
        $wHeight = $(window).height();
        $item.height($wHeight);
    });
    $('form').submit(function () {
        if (validateForm()) {
            // Assign handlers immediately after making the request,
            // and remember the jqxhr object for this request
            var jqxhr =
                    $.post($(this).attr('action'), $(this).serialize(), function () {
                        $("#cancelBtn").click();
                    })
                    .done(function (response) {
                        console.log("finish post");
                        $("#cancelBtn").click();
                    })
                    .fail(function (error) {
                        console.log("error " + error);
                        $("#cancelBtn").click();
                    }
                    );
            return false;
        } else {
            return false;
        }
    });
});

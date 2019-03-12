$(function () {

    /******************************
     * STATIC VARIABLES
     ******************************/
    var THUMBNAIL_WIDTH = 140,
            GALLERY = $('#slideshow');


    /******************************
     * EVENT LISTENERS
     ******************************/
    GALLERY.find('.thumb').on('click', function () {
        loadClickedImage($(this).data('thumb-id'));
    });
    GALLERY.find('#prev-btn').on('click', function () {
        slidePrev();
    });
    $(document).on("swipeleft", swipeHandler);
    function swipeHandler(event) {
        slideNext();
    }
    $(document).on("swiperight", swipeRightHandler);
    function swipeRightHandler(event) {
        slidePrev();
    }
    GALLERY.find('#next-btn').on('click', function () {
        slideNext();
    });
    $(document).keydown(function (e) {
        switch (e.keyCode) {
            // Left arrow press
            case 37:
                slidePrev();
                break;
                // Right arrow press
            case 39:
                slideNext();
                break;
            default:
                break;
        }
    });

    /******************************
     * GALLERY FUNCTIONS
     ******************************/
    var slideNext = function () {
        var active = GALLERY.find('.img-wrapper.active');
        if (active.length === 0) {
            active = GALLERY.find('.img-wrapper:last');
        }
        // Setting next image & thumb properties
        loadNextImage(active);
    };

    var loadNextImage = function (active) {
        var next = active.next(".img-wrapper").length ? active.next(".img-wrapper") : GALLERY.find('.img-wrapper:first'),
                nextThumb = GALLERY.find('[data-thumb-id="' + next.data('img-id') + '"]');
        $(".img-wrapper").removeClass('active');
        // Setting next image & thumb properties
        GALLERY.find('.thumb').removeClass('active');
        nextThumb.addClass('active');
        active.addClass('last-active');
        next[0].getAttribute('data-src');
        if (next[0].style.backgroundImage === "") {
            next[0].style.backgroundImage = "url('" + next[0].getAttribute('data-src') + "')";
        }
        // Transitioning to next image & thumbnail
        scrollThumbnails(nextThumb);
        next.css({opacity: 0.0})
                .addClass('active');
    };

    var slidePrev = function () {
        var active = GALLERY.find('.img-wrapper.active');

        if (active.length === 0) {
            active = GALLERY.find('.img-wrapper:last');
        }

        // Setting next image & thumb properties
        loadPrevImage(active);
    };

    var loadPrevImage = function (active) {
        var prev = active.prev(".img-wrapper").length ? active.prev(".img-wrapper") : GALLERY.find('.img-wrapper:last'),
                prevThumb = GALLERY.find('[data-thumb-id="' + prev.data('img-id') + '"]');

        $(".img-wrapper").removeClass('active');
        // Setting next image & thumb properties
        GALLERY.find('.thumb').removeClass('active');
        prevThumb.addClass('active');
        active.addClass('last-active');
        prev[0].getAttribute('data-src');
        if (prev[0].style.backgroundImage === "") {
            prev[0].style.backgroundImage = "url('" + prev[0].getAttribute('data-src') + "')";
        }

        // Transitioning to next image & thumbnail
        scrollThumbnails(prevThumb);
        prev.css({opacity: 0.0})
                .addClass('active');
    };

    var loadClickedImage = function (id) {
        var image = GALLERY.find('[data-img-id="' + id + '"]'),
                imgThumb = GALLERY.find('[data-thumb-id="' + id + '"]'),
                currActive = GALLERY.find('.img-wrapper.active');
        $(".img-wrapper").removeClass('active');
        // Setting image & thumb properties
        GALLERY.find('.thumb').removeClass('active');
        currActive.addClass('last-active').removeClass('active');
        imgThumb.addClass('active');
        image[0].getAttribute('data-src');
        if (image[0].style.backgroundImage === "") {
            image[0].style.backgroundImage = "url('" + image[0].getAttribute('data-src') + "')";
        }

        // Transitioning to image & thumbnail
        scrollThumbnails(imgThumb);
        image.css({opacity: 0.0})
                .addClass('active');
    };

    var scrollThumbnails = function (thumb) {
        var offset, // used for thumbnail offset
                first, // stores first thumbnail object
                x = thumb.position().left + parseInt(thumb.css('margin-left'), 10);

        // Checking current thumbnail offset
        if (x < 0) {
            first = GALLERY.find('.thumb:first');
            offset = parseInt(first.css('margin-left'), 10) - x;
            first.animate({
                marginLeft: offset
            }, 1000);
        } else {
            x = thumb.position().left;
            var currOffset = (x + THUMBNAIL_WIDTH) - thumb.parent().width();
            if (currOffset > 0) {
                first = GALLERY.find('.thumb:first');
                offset = parseInt(first.css('margin-left'), 10) - currOffset;
                first.animate({
                    marginLeft: offset
                }, 1000);
            }
        }
    };
    var img_wrapper = document.getElementsByClassName('img-wrapper');
    for (var i = 0; i < img_wrapper.length; i++) {
        if (img_wrapper[i].style.backgroundImage === "") {
            img_wrapper[i].style.backgroundImage = "url('" + img_wrapper[i].getAttribute('data-src') + "')";
        }
    }
}());
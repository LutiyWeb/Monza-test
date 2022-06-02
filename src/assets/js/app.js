// "use strict";

$(function () {
    // fixed header

    // $(window).scroll(function () {
    //     var height = $(window).scrollTop(); /*Если сделали скролл на 100px задаём новый класс для header*/
    //     if (height > 50) { $('header').addClass('header-fixed'); } else { /*Если меньше 100px удаляем класс для header*/
    //         $('header').removeClass('header-fixed');
    //     }
    // });

    // accordion script

    // let collapsibleHeaders = document.getElementsByClassName('collapsible__header');

    // Array.from(collapsibleHeaders).forEach(header => {
    //     header.addEventListener('click', () => {
    //         header.parentElement.classList.toggle('collapsible--open');
    //     });
    // });

    // custom select

    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });

    // custom select

    $('.filters__title').click(function () {
        $('.filters').slideToggle();
        $(this).toggleClass('rotate');
    })

    // searchpage input clear
    // $("#local-search").focus(function () {
    //     $(this).parent().addClass("active");
    //     $('.clear').addClass('show');
    // });

    // $("#local-search").blur(function () {
    //     $('.clear').removeClass('show');
    // });

    // $(".clear").click(function () {
    //     $('.local-search__Input').val('');
    //     $(this).removeClass('show');
    // });
    // searchpage input clear

    // $('#local-search').blur(function () {
    //     if ($(this).val() === '' || $(this).val() === undefined) {
    //         $(this).parent().removeClass('active');
    //     } else {
    //         $(this).parent().addClass('active');
    //         $(this).next().addClass('show');
    //     }
    // });

    // burger - btn
    $(".burger-button").on("click", function () {
        $('.header').toggleClass("mobile-nav");
        $('.burger-button').toggleClass("burgermenu_active");
        $('body').toggleClass("block-scroll");
    });
    // burger - btn

});



// accordion script

// let collapsibleHeaders = document.querySelectorAll('.accordion__item');
let accordItem = document.querySelectorAll('.accordion__item');
if (accordItem) {
    accordItem.forEach(item => {
        item.addEventListener('click', function () {
            if (this.classList.contains('accordion--open')) {
                this.classList.remove('accordion--open');
            } else {
                for (el of accordItem) {
                    el.classList.remove('accordion--open');
                }
                this.classList.add('accordion--open');
            }
        });
    });
}

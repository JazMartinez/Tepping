function onScroll(event) {
    var scrollPos = $(window).scrollTop();
    $('.second-menu li a').each(function () {
        var currLink = $(this),
            refElement = $(currLink.attr("href"));
        if (refElement.offset().top - 100 <= scrollPos + 63 + 74 && refElement.offset().top - 100 + refElement.height() > scrollPos) {
            $('.second-menu li a').removeClass("active");
            currLink.addClass("active");
            refElement.addClass('active');
        }
        else {
            refElement.removeClass('active');
            currLink.removeClass("active");
        }
    });
}

function loadBtn(element, duration) {
    element.addClass('load');

    setTimeout(function () {
        element.removeClass('load');
    }, duration)
}

function inputSuccess(element) {
    element.parent('.form-group-input').removeClass('error');
    element.parent('.form-group-input').addClass('success');
    element.parent('.form-group-input').next('p').text('')
}

function inputError(element, message) {
    element.parent('.form-group-input').removeClass('success');
    element.parent('.form-group-input').addClass('error');
    element.parent('.form-group-input').next('p').text(message)
}

function showTooltips(link, tooltip) {
    //Tools tooltips
    var toolsItem = $(link),
        toolsBlock = $(tooltip);

    toolsItem.click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find(tooltip).fadeOut(400);
        } else {
            toolsItem.removeClass('active');
            toolsBlock.fadeOut(400);

            $(this).addClass('active');
            $(this).find(tooltip).fadeIn(400);
        }
    });
}

$(document).ready(function () {
    showTooltips('.tools-item a', '.tools-item-about');
    showTooltips('.solution-char__link', '.solution-char__more');
    showTooltips('.icon-question', '.filter-title__more-info');

    var solutionBtn = $('.solution-price__more-btn'),
        solutionTop, solutionBottom;

    solutionBtn.click(function (e) {
        e.preventDefault();
        solutionTop = $(this).parents('.solution-item__top');
        solutionBottom = solutionTop.next('.solution-item__bottom');

        solutionTop.toggleClass('solution-item__top_active');
        solutionBottom.slideToggle(400);

        if (!solutionTop.hasClass('solution-item__top_active')) {
            $(this).find('span').text('Подробнее');
        } else {
            $(this).find('span').text('Cвернуть');
            solutionBottom.css('display', 'flex');
        }
    });

    //Permissions show
    var permissions = $('.permissions'),
        permissionsBtn = $('.permissions .btn'),
        permissionsLocalVal = localStorage.getItem('permissions');

    if (permissionsLocalVal === null) {
        permissions.fadeIn(800);
    }

    permissionsBtn.click(function (e) {
        e.preventDefault();

        localStorage.setItem('permissions', 'success');

        loadBtn($(this), 2000);
        setTimeout(function () {
            permissions.fadeOut(800);
        }, 1200);
    });

    //Modals inputs
    var modalInput = $('.form-group-input input'),
        inputType, inputValue;

    modalInput.focusin(function () {
        $(this).parent('.form-group-input').css('border-bottom-color', '#33A962');
        inputType = $(this).attr('name');
        inputValue = $(this).val();

        if (inputType === 'phone' && inputValue === '') {
            $(this).val('8')
        }
    });

    modalInput.focusout(function () {
        $(this).parent('.form-group-input').css('border-bottom-color', '#dcdcdc')
    });

    modalInput.keyup(function () {
        inputType = $(this).attr('name');
        inputValue = $(this).val();

        var reqular;

        if ($(this).val() !== '') {
            switch (inputType) {
                case 'email':
                    reqular = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                    if (inputValue.length > 2 && reqular.test(inputValue)) {
                        inputSuccess($(this));
                    } else {
                        inputError($(this), 'Введите данные в формате mail@mail.ru')
                    }
                    break;
                case 'phone':
                    reqular = /^[0-9]+$/;

                    if (inputValue.length > 2 && reqular.test(inputValue)) {
                        inputSuccess($(this));
                    } else {
                        inputError($(this), 'Допустимо использовать только числа')
                    }
                    break;
                case 'area':
                    reqular = /^[0-9]+$/;

                    if (inputValue.length > 2 && reqular.test(inputValue)) {
                        inputSuccess($(this));
                    } else {
                        inputError($(this), 'Допустимо использовать только числа')
                    }
                    break;
                case 'city':
                    reqular = /^[a-zA-Zа-яА-Я]+$/;

                    if (inputValue.length > 2 && reqular.test(inputValue)) {
                        inputSuccess($(this));
                    } else {
                        inputError($(this), 'Допустимо использовать символы только русского или английского алфавита, тире и апостроф')
                    }
                    break;
                case 'name':
                    reqular = /^[a-zA-Zа-яА-Я]+$/;

                    if (inputValue.length > 2 && reqular.test(inputValue)) {
                        inputSuccess($(this));
                    } else {
                        inputError($(this), 'Допустимо использовать символы только русского или английского алфавита, тире и апостроф')
                    }
                    break;
            }
        }
    });

    //Calculator
    var calcStepOne = $('.calc-step-1'),
        calcStepTwo = $('.calc-step-2'),
        areaInput;

    $('.calc-form-inline .btn').click(function () {
        areaInput = $('input[name=area-step-1]');

        if (areaInput.val() !== '') {
            loadBtn($(this), 2000);
            setTimeout(function () {
                $('input[name=area-step-2]').val(areaInput.val());
                calcStepOne.fadeOut(400);
                setTimeout(function () {
                    calcStepTwo.fadeIn(400, function () {
                        $('html, body').stop().animate({
                            scrollTop: calcStepTwo.offset().top - 135
                        }, 800);
                    });
                    calcStepTwo.addClass('open-step');
                    $('.objects').addClass('objects-overflow');
                }, 500);
            }, 2000);
        } else {
            $('.calc-form > p').text('Введите корректную площадь!')
        }
    });

    var currentColor = $('.calc-current-color'),
        changeColorBlock = $('.calc-change-color'),
        changeColorItem = $('.color-item'),
        anotherColorBtn = $('.another-group .btn'),
        anotherColorInput = $('input[name=another-color]'),
        currentColorItem = $('.current-color-item, .modal-product-color');

    currentColor.click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        changeColorBlock.slideToggle(400);
    });

    changeColorItem.click(function (e) {
        e.preventDefault();

        var itemColor = $(this).attr('style');
        currentColorItem.removeClass('color-item-dark');
        currentColorItem.removeClass('another-color');
        currentColorItem.attr('style', itemColor);
        currentColorItem.html($(this).html());

        if ($(this).hasClass('color-item-dark')) {
            currentColorItem.addClass('color-item-dark')
        }

        changeColorItem.removeClass('active');
        $(this).addClass('active');

        currentColor.removeClass('active');
        changeColorBlock.slideUp(400);
    });

    anotherColorBtn.click(function (e) {
        e.preventDefault();
        if (anotherColorInput.val() !== '') {
            $('.another-group i').animate({opacity: '1'}, 400);
            loadBtn($(this), 2000);
            setTimeout(function () {
                currentColorItem.removeClass('color-item-dark');
                currentColorItem.addClass('another-color');
                currentColorItem.text('На заказ');

                changeColorItem.removeClass('active');
                currentColor.removeClass('active');
                changeColorBlock.slideUp(400);
            }, 2000);
        } else {
            $('.color-another > p:first-of-type').text('Заполните поле ниже!')
        }
    });

    var contentRow = $('.calc-content-row'),
        contentRowMore = $('.calc-type-info-more');

    contentRow.find('.calc-type-info').click(function () {
        var contentRowCurrent = $(this).parents('.calc-content-row');
        var contentRowPrice = contentRowCurrent.find('.calc-type-price').html();

        if (contentRowCurrent.hasClass('active')) {
            contentRow.removeClass('disable');
            contentRowCurrent.removeClass('active');
            contentRowCurrent.find('.calc-type-info-more').slideUp(400);
        } else {
            $('.info-result-price').html(contentRowPrice);
            $('.info-result-price .price-result').prepend('<span>Итого</span>');
            contentRow.removeClass('active').addClass('disable');
            contentRowMore.slideUp(400);

            contentRowCurrent.addClass('active').removeClass('disable');
            contentRowCurrent.find('.calc-type-info-more').slideDown(400, function () {
                $('html, body').stop().animate({
                    scrollTop: contentRowCurrent.offset().top - 255
                }, 800);
            });
        }
    });

    //Time select
    $('.select-time-val').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.select-time-change').slideToggle(400);
    });

    $('.select-time-item').click(function (e) {
        e.preventDefault();
        var itemText = $(this).html(),
            selectText = $('.select-time-val span').html();
        $('.select-time-val span').html(itemText);
        $('input[name=select-time]').val(itemText);
        $(this).html(selectText);

        $('.select-time-val').removeClass('active');
        $('.select-time-change').slideUp(400);
    });

    //Main menu hover
    var dropMenu = $('.drop-menu-item');

    dropMenu.hover(function () {
        $('#wrapper').addClass('menu-active');
    });

    dropMenu.on('mouseleave', function () {
        $('#wrapper').removeClass('menu-active');
    });

    $('.acordeon-item-header').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next('.acordeon-item-content').slideUp(400);
        } else {
            $('.acordeon-item-header').removeClass('active');
            $('.acordeon-item-content').slideUp(400);
            $(this).addClass('active');
            $(this).next('.acordeon-item-content').slideDown(400, function () {
                $('html, body').stop().animate({
                    scrollTop: $(this).offset().top - ($(window).outerHeight() / 3)
                }, 800);
            });
        }
    });

    //Sliders
    $('.objects-slider').slick({
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-arrow"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-arrow"></i></button>',
        focusOnSelect: true
    });

    $('.letters-slider').slick({
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 3,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-arrow"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-arrow"></i></button>',
        focusOnSelect: true
    });

    $('.sertificats-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-arrow"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-arrow"></i></button>'
    });

    $('.works-list__slider').slick({
        infinity: true,
        dots: true,
        arrows: false
    });

    $('[data-fancybox^="works"]').fancybox({
        loop: true,
        toolbar: false,
        buttons: [
            'fullScreen',
            'close'
        ]
    });

    // Ajax form send
    $(".form-send").submit(function () {
        var formNm = $(this);
        var formBtn = $(this).find('button.btn');

        if (formNm.find('.form-group-input').hasClass('error')) {
            return false;
        } else {
            $.ajax({
                cache: false,
                type: "POST",
                url: '/send.php',
                data: formNm.serialize(),
                dataType: "json",
                success: function (data) {
                    loadBtn(formBtn, 2000);
                    setTimeout(function () {
                        $.fancybox.close();
                        $.fancybox.open('<div class="modal"><div class="modal-thanks-' + data[1] + '">' + data[0] + '<a href="javascript:;" class="btn btn-green-transparent" onclick="$.fancybox.close();">Ура!</a></div></div>');
                    }, 2000);
                }
            });
            $(this)[0].reset();
            return false;
        }
    });

    $('[data-fancybox]').fancybox({
        autoFocus: false
    });

    $('a[href^="#"]').bind("click", function (e) {
        e.preventDefault();

        var anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 130
        }, 1000);

        return false;
    });
});


$(function () {
    var elem = $('.header-bottom');
    var top = $(this).scrollTop();
    var h_hght = $('.header-middle').outerHeight();
    var h_mrg = 0;
    var galleryHeight;

    if (top > h_hght) {
        elem.css({
            'top': $('.header-top').outerHeight()
        });
    }

    $(window).scroll(function () {
        top = $(this).scrollTop();

        if ($('.calc-step-2').hasClass('open-step')) {
            galleryHeight = $('.objects').offset().top;

            if (top > galleryHeight - $(window).outerHeight() / 3) {
                $('.objects').removeClass('objects-overflow');
            } else {
                $('.objects').addClass('objects-overflow');
            }
        }

        if (top + h_mrg < h_hght) {
            elem.css({
                'top': '100%',
                'position': 'absolute'
            }).removeClass('header-fixed');
            $('.top-link').css('opacity', '0');
        } else {
            elem.css({
                'top': $('.header-top').outerHeight(),
                'position': 'fixed'
            }).addClass('header-fixed');
            $('.top-link').css('opacity', '1');
        }

        onScroll()
    });
});

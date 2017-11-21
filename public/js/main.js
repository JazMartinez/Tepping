function onScroll(t) {
    var e = $(window).scrollTop();
    $(".second-menu li a").each(function() {
        var t = $(this), o = $(t.attr("href"));
        o.offset().top - 100 <= e + 63 + 74 && o.offset().top - 100 + o.height() > e ? ($(".second-menu li a").removeClass("active"), 
        t.addClass("active"), o.addClass("active")) : (o.removeClass("active"), t.removeClass("active"));
    });
}

function loadBtn(t, e) {
    t.addClass("load"), setTimeout(function() {
        t.removeClass("load");
    }, e);
}

function inputSuccess(t) {
    t.parent(".form-group-input").removeClass("error"), t.parent(".form-group-input").addClass("success"), 
    t.parent(".form-group-input").next("p").text("");
}

function inputError(t, e) {
    t.parent(".form-group-input").removeClass("success"), t.parent(".form-group-input").addClass("error"), 
    t.parent(".form-group-input").next("p").text(e);
}

function showTooltips(t, e) {
    var o = $(t), s = $(e);
    o.click(function(t) {
        t.preventDefault(), $(this).hasClass("active") ? ($(this).removeClass("active"), 
        $(this).find(e).fadeOut(400)) : (o.removeClass("active"), s.fadeOut(400), $(this).addClass("active"), 
        $(this).find(e).fadeIn(400));
    });
}

$(document).ready(function() {
    showTooltips(".tools-item a", ".tools-item-about"), showTooltips(".solution-char__link", ".solution-char__more"), 
    showTooltips(".icon-question", ".filter-title__more-info");
    var t, e;
    $(".solution-price__more-btn").click(function(o) {
        o.preventDefault(), t = $(this).parents(".solution-item__top"), e = t.next(".solution-item__bottom"), 
        t.toggleClass("solution-item__top_active"), e.slideToggle(400), t.hasClass("solution-item__top_active") ? ($(this).find("span").text("Cвернуть"), 
        e.css("display", "flex")) : $(this).find("span").text("Подробнее");
    });
    var o = $(".permissions"), s = $(".permissions .btn");
    null === localStorage.getItem("permissions") && o.fadeIn(800), s.click(function(t) {
        t.preventDefault(), localStorage.setItem("permissions", "success"), loadBtn($(this), 2e3), 
        setTimeout(function() {
            o.fadeOut(800);
        }, 1200);
    });
    var i, a, n = $(".form-group-input input");
    n.focusin(function() {
        $(this).parent(".form-group-input").css("border-bottom-color", "#33A962"), i = $(this).attr("name"), 
        a = $(this).val(), "phone" === i && "" === a && $(this).val("8");
    }), n.focusout(function() {
        $(this).parent(".form-group-input").css("border-bottom-color", "#dcdcdc");
    }), n.keyup(function() {
        i = $(this).attr("name"), a = $(this).val();
        var t;
        if ("" !== $(this).val()) switch (i) {
          case "email":
            t = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/, a.length > 2 && t.test(a) ? inputSuccess($(this)) : inputError($(this), "Введите данные в формате mail@mail.ru");
            break;

          case "phone":
          case "area":
            t = /^[0-9]+$/, a.length > 2 && t.test(a) ? inputSuccess($(this)) : inputError($(this), "Допустимо использовать только числа");
            break;

          case "city":
          case "name":
            t = /^[a-zA-Zа-яА-Я]+$/, a.length > 2 && t.test(a) ? inputSuccess($(this)) : inputError($(this), "Допустимо использовать символы только русского или английского алфавита, тире и апостроф");
        }
    });
    var r, c = $(".calc-step-1"), l = $(".calc-step-2");
    $(".calc-form-inline .btn").click(function() {
        "" !== (r = $("input[name=area-step-1]")).val() ? (loadBtn($(this), 2e3), setTimeout(function() {
            $("input[name=area-step-2]").val(r.val()), c.fadeOut(400), setTimeout(function() {
                l.fadeIn(400, function() {
                    $("html, body").stop().animate({
                        scrollTop: l.offset().top - 135
                    }, 800);
                }), l.addClass("open-step"), $(".objects").addClass("objects-overflow");
            }, 500);
        }, 2e3)) : $(".calc-form > p").text("Введите корректную площадь!");
    });
    var p = $(".calc-current-color"), u = $(".calc-change-color"), d = $(".color-item"), f = $(".another-group .btn"), m = $("input[name=another-color]"), h = $(".current-color-item, .modal-product-color");
    p.click(function(t) {
        t.preventDefault(), $(this).toggleClass("active"), u.slideToggle(400);
    }), d.click(function(t) {
        t.preventDefault();
        var e = $(this).attr("style");
        h.removeClass("color-item-dark"), h.removeClass("another-color"), h.attr("style", e), 
        h.html($(this).html()), $(this).hasClass("color-item-dark") && h.addClass("color-item-dark"), 
        d.removeClass("active"), $(this).addClass("active"), p.removeClass("active"), u.slideUp(400);
    }), f.click(function(t) {
        t.preventDefault(), "" !== m.val() ? ($(".another-group i").animate({
            opacity: "1"
        }, 400), loadBtn($(this), 2e3), setTimeout(function() {
            h.removeClass("color-item-dark"), h.addClass("another-color"), h.text("На заказ"), 
            d.removeClass("active"), p.removeClass("active"), u.slideUp(400);
        }, 2e3)) : $(".color-another > p:first-of-type").text("Заполните поле ниже!");
    });
    var v = $(".calc-content-row"), b = $(".calc-type-info-more");
    v.find(".calc-type-info").click(function() {
        var t = $(this).parents(".calc-content-row"), e = t.find(".calc-type-price").html();
        t.hasClass("active") ? (v.removeClass("disable"), t.removeClass("active"), t.find(".calc-type-info-more").slideUp(400)) : ($(".info-result-price").html(e), 
        $(".info-result-price .price-result").prepend("<span>Итого стоимость материалов:</span>"), 
        v.removeClass("active").addClass("disable"), b.slideUp(400), t.addClass("active").removeClass("disable"), 
        t.find(".calc-type-info-more").slideDown(400, function() {
            $("html, body").stop().animate({
                scrollTop: t.offset().top - 255
            }, 800);
        }));
    }), $(".select-time-val").click(function(t) {
        t.preventDefault(), $(this).toggleClass("active"), $(this).next(".select-time-change").slideToggle(400);
    }), $(".select-time-item").click(function(t) {
        t.preventDefault();
        var e = $(this).html(), o = $(".select-time-val span").html();
        $(".select-time-val span").html(e), $("input[name=select-time]").val(e), $(this).html(o), 
        $(".select-time-val").removeClass("active"), $(".select-time-change").slideUp(400);
    });
    var C = $(".drop-menu-item");
    C.hover(function() {
        $("#wrapper").addClass("menu-active");
    }), C.on("mouseleave", function() {
        $("#wrapper").removeClass("menu-active");
    }), $(".acordeon-item-header").click(function(t) {
        t.preventDefault(), $(this).hasClass("active") ? ($(this).removeClass("active"), 
        $(this).next(".acordeon-item-content").slideUp(400)) : ($(".acordeon-item-header").removeClass("active"), 
        $(".acordeon-item-content").slideUp(400), $(this).addClass("active"), $(this).next(".acordeon-item-content").slideDown(400, function() {
            $("html, body").stop().animate({
                scrollTop: $(this).offset().top - $(window).outerHeight() / 3
            }, 800);
        }));
    }), $(".objects-slider").slick({
        centerMode: !0,
        centerPadding: "450px",
        slidesToShow: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-arrow"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-arrow"></i></button>',
        focusOnSelect: !0
    }), $(".letters-slider").slick({
        centerMode: !0,
        centerPadding: "120px",
        slidesToShow: 3,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-arrow"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-arrow"></i></button>',
        focusOnSelect: !0
    }), $(".sertificats-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon-arrow"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon-arrow"></i></button>'
    }), $(".works-list__slider").slick({
        infinity: !0,
        dots: !0,
        arrows: !1
    }), $('[data-fancybox^="works"]').fancybox({
        loop: !0,
        toolbar: !1,
        buttons: [ "fullScreen", "close" ]
    }), $(".form-send").submit(function() {
        var t = $(this), e = $(this).find("button.btn");
        return !t.find(".form-group-input").hasClass("error") && ($.ajax({
            cache: !1,
            type: "POST",
            url: "/send.php",
            data: t.serialize(),
            dataType: "json",
            success: function(t) {
                loadBtn(e, 2e3), setTimeout(function() {
                    $.fancybox.close(), $.fancybox.open('<div class="modal"><div class="modal-thanks-' + t[1] + '">' + t[0] + '<a href="javascript:;" class="btn btn-green-transparent" onclick="$.fancybox.close();">Ура!</a></div></div>');
                }, 2e3);
            }
        }), $(this)[0].reset(), !1);
    }), $("[data-fancybox]").fancybox({
        autoFocus: !1
    }), $('a[href^="#"]').bind("click", function(t) {
        t.preventDefault();
        var e = $(this);
        return $("html, body").stop().animate({
            scrollTop: $(e.attr("href")).offset().top - 130
        }, 1e3), !1;
    });
}), $(function() {
    var t, e = $(".header-bottom"), o = $(this).scrollTop(), s = $(".header-middle").outerHeight();
    o > s && e.css({
        top: $(".header-top").outerHeight()
    }), $(window).scroll(function() {
        o = $(this).scrollTop(), $(".calc-step-2").hasClass("open-step") && (t = $(".objects").offset().top, 
        o > t - $(window).outerHeight() / 3 ? $(".objects").removeClass("objects-overflow") : $(".objects").addClass("objects-overflow")), 
        o + 0 < s ? (e.css({
            top: "100%",
            position: "absolute"
        }).removeClass("header-fixed"), $(".top-link").css("opacity", "0")) : (e.css({
            top: $(".header-top").outerHeight(),
            position: "fixed"
        }).addClass("header-fixed"), $(".top-link").css("opacity", "1")), onScroll();
    });
});
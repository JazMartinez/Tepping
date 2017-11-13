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

$(document).ready(function() {
    var t = $(".permissions"), e = $(".permissions .btn");
    null === localStorage.getItem("permissions") && t.fadeIn(800), e.click(function(e) {
        e.preventDefault(), localStorage.setItem("permissions", "success"), loadBtn($(this), 2e3), 
        setTimeout(function() {
            t.fadeOut(800);
        }, 1200);
    });
    var o, s, a = $(".form-group-input input");
    a.focusin(function() {
        $(this).parent(".form-group-input").css("border-bottom-color", "#33A962"), o = $(this).attr("name"), 
        s = $(this).val(), "phone" === o && "" === s && $(this).val("8");
    }), a.focusout(function() {
        $(this).parent(".form-group-input").css("border-bottom-color", "#dcdcdc");
    }), a.keyup(function() {
        o = $(this).attr("name"), s = $(this).val();
        var t;
        if ("" !== $(this).val()) switch (o) {
          case "email":
            t = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/, s.length > 2 && t.test(s) ? inputSuccess($(this)) : inputError($(this), "Введите данные в формате mail@mail.ru");
            break;

          case "phone":
          case "area":
            t = /^[0-9]+$/, s.length > 2 && t.test(s) ? inputSuccess($(this)) : inputError($(this), "Допустимо использовать только числа");
            break;

          case "city":
          case "name":
            t = /^[a-zA-Zа-яА-Я]+$/, s.length > 2 && t.test(s) ? inputSuccess($(this)) : inputError($(this), "Допустимо использовать символы только русского или английского алфавита, тире и апостроф");
        }
    });
    var i, n = $(".calc-step-1"), r = $(".calc-step-2");
    $(".calc-form-inline .btn").click(function() {
        "" !== (i = $("input[name=area-step-1]")).val() ? (loadBtn($(this), 2e3), setTimeout(function() {
            $("input[name=area-step-2]").val(i.val()), n.fadeOut(400), setTimeout(function() {
                r.fadeIn(400, function() {
                    $("html, body").stop().animate({
                        scrollTop: r.offset().top - 135
                    }, 800);
                }), r.addClass("open-step"), $(".objects").addClass("objects-overflow");
            }, 500);
        }, 2e3)) : $(".calc-form > p").text("Введите корректную площадь!");
    });
    var c = $(".calc-current-color"), l = $(".calc-change-color"), p = $(".color-item"), u = $(".another-group .btn"), d = $("input[name=another-color]"), f = $(".current-color-item, .modal-product-color");
    c.click(function(t) {
        t.preventDefault(), $(this).toggleClass("active"), l.slideToggle(400);
    }), p.click(function(t) {
        t.preventDefault();
        var e = $(this).attr("style");
        f.removeClass("color-item-dark"), f.removeClass("another-color"), f.attr("style", e), 
        f.html($(this).html()), $(this).hasClass("color-item-dark") && f.addClass("color-item-dark"), 
        p.removeClass("active"), $(this).addClass("active"), c.removeClass("active"), l.slideUp(400);
    }), u.click(function(t) {
        t.preventDefault(), "" !== d.val() ? ($(".another-group i").animate({
            opacity: "1"
        }, 400), loadBtn($(this), 2e3), setTimeout(function() {
            f.removeClass("color-item-dark"), f.addClass("another-color"), f.text("На заказ"), 
            p.removeClass("active"), c.removeClass("active"), l.slideUp(400);
        }, 2e3)) : $(".color-another > p:first-of-type").text("Заполните поле ниже!");
    });
    var m = $(".calc-content-row"), v = $(".calc-type-info-more");
    m.find(".calc-type-info").click(function() {
        var t = $(this).parents(".calc-content-row"), e = t.find(".calc-type-price").html();
        t.hasClass("active") ? (m.removeClass("disable"), t.removeClass("active"), t.find(".calc-type-info-more").slideUp(400)) : ($(".info-result-price").html(e), 
        $(".info-result-price .price-result").prepend("<span>Итого</span>"), m.removeClass("active").addClass("disable"), 
        v.slideUp(400), t.addClass("active").removeClass("disable"), t.find(".calc-type-info-more").slideDown(400, function() {
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
    var h = $(".tools-item a"), b = $(".tools-item-about");
    h.click(function(t) {
        t.preventDefault(), $(this).hasClass("active") ? ($(this).removeClass("active"), 
        $(this).find(".tools-item-about").fadeOut(400)) : (h.removeClass("active"), b.fadeOut(400), 
        $(this).addClass("active"), $(this).find(".tools-item-about").fadeIn(400));
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
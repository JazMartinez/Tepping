function onScroll(t) {
    var e = $(window).scrollTop();
    $(".second-menu li a").each(function() {
        var t = $(this), s = $(t.attr("href"));
        s.offset().top - 100 <= e + 63 + 74 && s.offset().top - 100 + s.height() > e ? ($(".second-menu li a").removeClass("active"), 
        t.addClass("active"), s.addClass("active")) : (s.removeClass("active"), t.removeClass("active"));
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
    var s = $(t), o = $(e);
    s.click(function(t) {
        t.preventDefault(), $(this).hasClass("active") ? ($(this).removeClass("active"), 
        $(this).find(e).fadeOut(400)) : (s.removeClass("active"), o.fadeOut(400), $(this).addClass("active"), 
        $(this).find(e).fadeIn(400));
    });
}

$(document).ready(function() {
    showTooltips(".tools-item a", ".tools-item-about"), showTooltips(".solution-char__link", ".solution-char__more"), 
    showTooltips(".icon-question", ".filter-title__more-info");
    var t, e;
    $(".solution-price__more-btn").click(function(s) {
        s.preventDefault(), t = $(this).parents(".solution-item__top"), e = t.next(".solution-item__bottom"), 
        t.toggleClass("solution-item__top_active"), e.slideToggle(400), t.hasClass("solution-item__top_active") ? ($(this).find("span").text("Cвернуть"), 
        e.css("display", "flex")) : $(this).find("span").text("Подробнее");
    });
    var s = $(".permissions"), o = $(".permissions .btn");
    null === localStorage.getItem("permissions") && s.fadeIn(800), o.click(function(t) {
        t.preventDefault(), localStorage.setItem("permissions", "success"), loadBtn($(this), 2e3), 
        setTimeout(function() {
            s.fadeOut(800);
        }, 1200);
    });
    var a, i, n = $(".form-group-input input");
    n.focusin(function() {
        $(this).parent(".form-group-input").css("border-bottom-color", "#33A962"), a = $(this).attr("name"), 
        i = $(this).val(), "phone" === a && "" === i && $(this).val("8");
    }), n.focusout(function() {
        $(this).parent(".form-group-input").css("border-bottom-color", "#dcdcdc");
    }), n.keyup(function() {
        a = $(this).attr("name"), i = $(this).val();
        var t;
        if ("" !== $(this).val()) switch (a) {
          case "email":
            t = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/, i.length > 2 && t.test(i) ? inputSuccess($(this)) : inputError($(this), "Введите данные в формате mail@mail.ru");
            break;

          case "phone":
          case "area":
            t = /^[0-9]+$/, i.length > 2 && t.test(i) ? inputSuccess($(this)) : inputError($(this), "Допустимо использовать только числа");
            break;

          case "city":
          case "name":
            t = /^[a-zA-Zа-яА-Я]+$/, i.length > 2 && t.test(i) ? inputSuccess($(this)) : inputError($(this), "Допустимо использовать символы только русского или английского алфавита, тире и апостроф");
        }
    });
    var l, c = $(".calc-step-1"), r = $(".calc-step-2");
    $(".calc-form-inline .btn").click(function() {
        "" !== (l = $("input[name=area-step-1]")).val() ? (loadBtn($(this), 2e3), setTimeout(function() {
            $("input[name=area-step-2]").val(l.val()), c.fadeOut(400), setTimeout(function() {
                r.fadeIn(400, function() {
                    $("html, body").stop().animate({
                        scrollTop: r.offset().top - 135
                    }, 800);
                }), r.addClass("open-step"), $(".objects").addClass("objects-overflow");
            }, 500);
        }, 2e3)) : $(".calc-form > p").text("Введите корректную площадь!");
    });
    var d = $(".calc-current-color"), p = $(".calc-change-color"), u = $(".color-item"), m = $(".another-group .btn"), h = $("input[name=another-color]"), f = $(".current-color-item, .modal-product-color");
    d.click(function(t) {
        t.preventDefault(), $(this).toggleClass("active"), p.slideToggle(400);
    }), u.click(function(t) {
        t.preventDefault();
        var e = $(this).attr("style");
        f.removeClass("color-item-dark"), f.removeClass("another-color"), f.attr("style", e), 
        f.html($(this).html()), $(this).hasClass("color-item-dark") && f.addClass("color-item-dark"), 
        u.removeClass("active"), $(this).addClass("active"), d.removeClass("active"), p.slideUp(400);
    }), m.click(function(t) {
        t.preventDefault(), "" !== h.val() ? ($(".another-group i").animate({
            opacity: "1"
        }, 400), loadBtn($(this), 2e3), setTimeout(function() {
            f.removeClass("color-item-dark"), f.addClass("another-color"), f.text("На заказ"), 
            u.removeClass("active"), d.removeClass("active"), p.slideUp(400);
        }, 2e3)) : $(".color-another > p:first-of-type").text("Заполните поле ниже!");
    });
    var v = $(".calc-content-row"), g = $(".calc-type-info-more");
    v.find(".calc-type-info").click(function() {
        var t = $(this).parents(".calc-content-row"), e = t.find(".calc-type-price").html();
        t.hasClass("active") ? (v.removeClass("disable"), t.removeClass("active"), t.find(".calc-type-info-more").slideUp(400)) : ($(".info-result-price").html(e), 
        $(".info-result-price .price-result").prepend("<span>Итого стоимость материалов:</span>"), 
        v.removeClass("active").addClass("disable"), g.slideUp(400), t.addClass("active").removeClass("disable"), 
        t.find(".calc-type-info-more").slideDown(400, function() {
            $("html, body").stop().animate({
                scrollTop: t.offset().top - 255
            }, 800);
        }));
    }), $(".select-time-val").click(function(t) {
        t.preventDefault(), $(this).toggleClass("active"), $(this).next(".select-time-change").slideToggle(400);
    }), $(".select-time-item").click(function(t) {
        t.preventDefault();
        var e = $(this).html(), s = $(".select-time-val span").html();
        $(".select-time-val span").html(e), $("input[name=select-time]").val(e), $(this).html(s), 
        $(".select-time-val").removeClass("active"), $(".select-time-change").slideUp(400);
    });
    var b = $(".drop-menu-item");
    b.hover(function() {
        $("#wrapper").addClass("menu-active");
    }), b.on("mouseleave", function() {
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
        $("html, body").stop().animate({
            scrollTop: $(e.attr("href")).offset().top - 130
        }, 1e3);
    });
    var C, w = $(".mod__min-image");
    w.click(function() {
        (C = $(this).next(".mod__scale-image")).hasClass("active") ? (C.slideUp(400).removeClass("active"), 
        $(this).parents(".mod").removeClass("active")) : ($(".mod").removeClass("active"), 
        w.next(".mod__scale-image").removeClass("active"), C.slideDown(400).addClass("active"), 
        $(this).parents(".mod").addClass("active"));
    });
    var k, x = 0, y = 0, _ = {
        x: 0,
        y: 0
    }, T = {
        magniflier: $(".mod__scale")
    };
    if (T.magniflier.length) {
        var S = document.createElement("div");
        S.setAttribute("class", "glass"), T.glass = $(S), $("body").append(S);
    }
    var A = function(t) {
        var e = k.offset();
        _.x = t.pageX - e.left, _.y = t.pageY - e.top, _.x < k.width() && _.y < k.height() && _.x > 0 && _.y > 0 ? D(t) : T.glass.fadeOut(400);
    }, D = function(t) {
        var e = -1 * Math.round(_.x / k.width() * x - T.glass.width() / 2) + "px " + -1 * Math.round(_.y / k.height() * y - T.glass.height() / 2) + "px", s = t.pageX - T.glass.width() / 2, o = t.pageY - T.glass.height() / 2;
        T.glass.css({
            left: s,
            top: o,
            backgroundPosition: e
        });
    };
    $(".mod, .objects").on("mousemove", function() {
        $(this).hasClass("active") || (T.glass.fadeOut(100), w.next(".mod__scale-image").removeClass("active"), 
        $(".mod").removeClass("active"));
    }), $(T.magniflier).on("mousemove", function() {
        T.glass.fadeIn(100);
        var t = (k = $(this)).attr("src");
        if (t && T.glass.css({
            "background-image": "url(" + t + ")",
            "background-repeat": "no-repeat"
        }), !k.data("native_width")) {
            var e = new Image();
            return e.onload = function() {
                x = e.width, y = e.height, k.data("native_width", x), k.data("native_height", y), 
                A.apply(this, arguments), T.glass.on("mousemove", A);
            }, void (e.src = t);
        }
        x = k.data("native_width"), y = k.data("native_height"), A.apply(this, arguments), 
        T.glass.on("mousemove", A);
    });
}), $(function() {
    var t, e = $(".header-bottom"), s = $(this).scrollTop(), o = $(".header-middle").outerHeight();
    s > o && e.css({
        top: $(".header-top").outerHeight()
    }), $(window).scroll(function() {
        s = $(this).scrollTop(), $(".calc-step-2").hasClass("open-step") && (t = $(".objects").offset().top, 
        s > t - $(window).outerHeight() / 3 ? $(".objects").removeClass("objects-overflow") : $(".objects").addClass("objects-overflow")), 
        s + 0 < o ? (e.css({
            top: "100%",
            position: "absolute"
        }).removeClass("header-fixed"), $(".top-link").css("opacity", "0")) : (e.css({
            top: $(".header-top").outerHeight(),
            position: "fixed"
        }).addClass("header-fixed"), $(".top-link").css("opacity", "1")), onScroll();
    });
});
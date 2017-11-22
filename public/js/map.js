function initMap() {
    var o, n, e;
    o = new ymaps.Map("contact-map", {
        center: [ 59.935220121252826, 30.42805633056636 ],
        zoom: 15,
        controls: []
    }), n = new ymaps.Placemark([ 59.93460105137303, 30.439234589965732 ], {
        hintContent: "Офис",
        balloonContentHeader: "Офис",
        balloonContentBody: "Тут можно разместить текст",
        balloonContentFooter: "И тут"
    }, {
        iconLayout: "default#image",
        iconImageHref: "./img/contacts/map-office.png",
        iconImageSize: [ 41, 61 ],
        iconImageOffset: [ -21, -61 ]
    }), e = new ymaps.Placemark([ 59.938256564140545, 30.44419249999994 ], {
        hintContent: "Склад!",
        balloonContentHeader: "Склад",
        balloonContentBody: "Тут можно разместить текст",
        balloonContentFooter: "И тут"
    }, {
        iconLayout: "default#image",
        iconImageHref: "./img/contacts/map-truck.png",
        iconImageSize: [ 41, 61 ],
        iconImageOffset: [ -21, -61 ]
    }), o.geoObjects.add(n), o.geoObjects.add(e), o.behaviors.disable("scrollZoom");
}
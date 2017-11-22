function initMap() {
    var map,
        peterOffice,
        peterTruck;
    map = new ymaps.Map("contact-map", {
        center: [59.935220121252826,30.42805633056636],
        zoom: 15,
        controls: [] //'zoomControl'
    });

    peterOffice = new ymaps.Placemark([59.93460105137303,30.439234589965732], {
        hintContent: 'Офис',
        balloonContentHeader: 'Офис',
        balloonContentBody: 'Тут можно разместить текст',
        balloonContentFooter: 'И тут'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/contacts/map-office.png',
        iconImageSize: [41, 61],
        iconImageOffset: [-21, -61]
    });

    peterTruck = new ymaps.Placemark([59.938256564140545,30.44419249999994], {
        hintContent: 'Склад!',
        balloonContentHeader: 'Склад',
        balloonContentBody: 'Тут можно разместить текст',
        balloonContentFooter: 'И тут'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/contacts/map-truck.png',
        iconImageSize: [41, 61],
        iconImageOffset: [-21, -61]
    });

    map.geoObjects.add(peterOffice);
    map.geoObjects.add(peterTruck);
    map.behaviors.disable('scrollZoom')
}

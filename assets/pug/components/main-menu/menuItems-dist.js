"use strict";

var menuItems = [{
    src: "/catalog.html",
    title: "Каталог",
    dropMenu: [{
        src: "#",
        icon: "icon-menu-item-4",
        title: "Покрытия по типу объекта",
        linkMenu: [{
            src: "#",
            title: "Производства",
            icon: "icon-production"
        }, {
            src: "#",
            title: "Школы, ВУЗы,  детские сады",
            icon: "icon-book"
        }, {
            src: "#",
            title: "Паркинги, гаражи",
            icon: "icon-parking"
        }, {
            src: "#",
            title: "Торговые комплексы",
            icon: "icon-trade"
        }, {
            src: "#",
            title: "Склады",
            icon: "icon-stock"
        }, {
            src: "#",
            title: "Здравоохранение, фармацевтика",
            icon: "icon-medical"
        }, {
            src: "#",
            title: "Квартиры и офисы",
            icon: "icon-office"
        }, {
            src: "#",
            title: "Объекты атомной энергетики, ТЭЦ",
            icon: "icon-lightning"
        }, {
            src: "#",
            title: "Аэропорты, вокзалы, метро",
            icon: "icon-metro"
        }, {
            src: "#",
            title: "Здравоохранение, фармацевтика",
            icon: "icon-medical"
        }, {
            src: "#",
            title: "Аэропорты, вокзалы, метро",
            icon: "icon-metro"
        }, {
            src: "#",
            title: "Объекты атомной энергетики, ТЭЦ",
            icon: "icon-lightning"
        }]
    }, {
        src: "#",
        icon: "",
        title: "Наливные полы",
        innerMenu: [{
            type: "inner-title",
            title: "Эпоксидные"
        }, {
            src: "#",
            icon: "icon-menu-item-7",
            title: "Teping Пол 205 C Универсальный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-1",
            title: "Teping Пол 205 К Кислото и щелочестойкий",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-8",
            title: "Teping Пол 205 Паро Паропроницаемый",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-5",
            title: "Teping Пол 205 С Пром Промышленный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-3",
            title: "Teping Пол 205 АС Антистатический",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-9",
            title: "Teping Пол 205 Прозрачный Прозрачный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            type: "inner-title",
            title: "Полиуретановые"
        }, {
            src: "#",
            icon: "icon-menu-item-6",
            title: "Teping Пол 205 ПУ Полиуретановый",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-2",
            title: "Teping Пол 205 Эко Экологичный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }]
    }, {
        src: "#",
        icon: "",
        title: "Краски для полов",
        innerMenu: [{
            type: "inner-title",
            title: "Эпоксидные"
        }, {
            src: "#",
            icon: "icon-menu-item-7",
            title: "Teping Пол 205 C Универсальный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-1",
            title: "Teping Пол 205 К Кислото и щелочестойкий",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-8",
            title: "Teping Пол 205 Паро Паропроницаемый",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-5",
            title: "Teping Пол 205 С Пром Промышленный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-3",
            title: "Teping Пол 205 АС Антистатический",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-9",
            title: "Teping Пол 205 Прозрачный Прозрачный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }]
    }, {
        src: "#",
        icon: "",
        title: "Покрытия для спортивных площадок",
        innerMenu: [{
            type: "inner-title",
            title: "Полиуретановые"
        }, {
            src: "#",
            icon: "icon-menu-item-6",
            title: "Teping Пол 205 ПУ Полиуретановый",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-2",
            title: "Teping Пол 205 Эко Экологичный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }]
    }, {
        src: "#",
        icon: "",
        title: "Покрытия для спортивных залов",
        innerMenu: [{
            src: "#",
            icon: "icon-menu-item-6",
            title: "Teping Пол 205 ПУ Полиуретановый",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-2",
            title: "Teping Пол 205 Эко Экологичный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }]
    }, {
        src: "#",
        icon: "",
        title: "Покрытия для детских площадок",
        innerMenu: [{
            type: "inner-title",
            title: "Эпоксидные"
        }, {
            src: "#",
            icon: "icon-menu-item-6",
            title: "Teping Пол 205 ПУ Полиуретановый",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }, {
            src: "#",
            icon: "icon-menu-item-2",
            title: "Teping Пол 205 Эко Экологичный",
            catalogItem: {
                src: "#",
                bgImage: "./img/menu-product/1.jpg",
                productImage: "./img/menu-product/product-item-1.png",
                price: "367",
                name: "<i class='icon-title'></i> Пол 205 C",
                description: "Универсальный эпоксидный наливной пол с отличным внешним видом",
                list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
            }
        }]
    }, {
        src: "#",
        icon: "",
        title: "Лак",
        catalogItem: {
            src: "#",
            bgImage: "./img/menu-product/2.jpg",
            productImage: "./img/menu-product/product-item-2.png",
            price: "367",
            name: "<i class='icon-NG'></i><i class='icon-title'></i> НГ КМ0",
            description: "Негорючая краска класса КМ0",
            list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
        }
    }, {
        src: "#",
        icon: "",
        title: "Грунт",
        catalogItem: {
            src: "#",
            bgImage: "./img/menu-product/2.jpg",
            productImage: "./img/menu-product/product-item-2.png",
            price: "367",
            name: "<i class='icon-NG'></i><i class='icon-title'></i> НГ КМ0",
            description: "Негорючая краска класса КМ0",
            list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
        }
    }, {
        src: "#",
        icon: "",
        title: "Люминофор",
        catalogItem: {
            src: "#",
            bgImage: "./img/menu-product/2.jpg",
            productImage: "./img/menu-product/product-item-2.png",
            price: "367",
            name: "<i class='icon-NG'></i><i class='icon-title'></i> НГ КМ0",
            description: "Негорючая краска класса КМ0",
            list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
        }
    }, {
        src: "#",
        icon: "",
        title: "Teping НГ (КМ0)",
        catalogItem: {
            src: "#",
            bgImage: "./img/menu-product/2.jpg",
            productImage: "./img/menu-product/product-item-2.png",
            price: "367",
            name: "<i class='icon-NG'></i><i class='icon-title'></i> НГ КМ0",
            description: "Негорючая краска класса КМ0",
            list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
        }
    }, {
        src: "#",
        icon: "",
        title: "Hempel",
        catalogItem: {
            src: "#",
            bgImage: "./img/menu-product/2.jpg",
            productImage: "./img/menu-product/product-item-2.png",
            price: "367",
            name: "<i class='icon-NG'></i><i class='icon-title'></i> НГ КМ0",
            description: "Негорючая краска класса КМ0",
            list: ["Сертифицированный продукт", "Защитает пол", "Декоративный"]
        }
    }]
}, {
    src: "/solutions.html",
    title: "Системы покрытий",
    linkMenu: [{
        src: "#",
        title: "Производства",
        icon: "icon-production"
    }, {
        src: "#",
        title: "Школы, ВУЗы,  детские сады",
        icon: "icon-book"
    }, {
        src: "#",
        title: "Паркинги, гаражи",
        icon: "icon-parking"
    }, {
        src: "#",
        title: "Торговые комплексы",
        icon: "icon-trade"
    }, {
        src: "#",
        title: "Склады",
        icon: "icon-stock"
    }, {
        src: "#",
        title: "Здравоохранение, фармацевтика",
        icon: "icon-medical"
    }, {
        src: "#",
        title: "Квартиры и офисы",
        icon: "icon-office"
    }, {
        src: "#",
        title: "Объекты атомной энергетики, ТЭЦ",
        icon: "icon-lightning"
    }, {
        src: "#",
        title: "Аэропорты, вокзалы, метро",
        icon: "icon-metro"
    }, {
        src: "#",
        title: "Здравоохранение, фармацевтика",
        icon: "icon-medical"
    }, {
        src: "#",
        title: "Аэропорты, вокзалы, метро",
        icon: "icon-metro"
    }, {
        src: "#",
        title: "Объекты атомной энергетики, ТЭЦ",
        icon: "icon-lightning"
    }]
}, {
    src: "#",
    title: "Цены"
}, {
    src: "/about.html",
    title: "О компании"
}, {
    src: "/contacts.html",
    title: "Контакты"
}];
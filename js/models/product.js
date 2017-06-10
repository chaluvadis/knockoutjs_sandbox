
var Product = function (id, name, price, stock) {
    "use strict";
    // var _id = id,
    //     _name = name,
    //     _price = price,
    //     _stock = stock;

    var _id = ko.observable(id),
        _name = ko.observable(name),
        _price = ko.observable(price),
        _stock = ko.observable(stock);

    return {
        id: _id,
        name: _name,
        price: _price,
        stock: _stock
    };
}
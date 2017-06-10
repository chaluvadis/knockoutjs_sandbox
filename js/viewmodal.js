// var vm = {
//     product:  {
//         id: 1,
//         name: 'T-Shirt',
//         price: 10,
//         stock: 20
//     }
// };

var vm = (() => {
    // var product = Product(1, 'T-Shirt', 10, 20);
    // return {
    //     product: product
    // }

    var newProduct = Product("", "", "", "");
    var searchTerm = ko.observable('');

    var catalog = ko.observableArray([
        Product(1, "T-Shirt", 10.00, 20),
        Product(2, "Trousers", 20.00, 10),
        Product(3, "Shirt", 15.00, 20),
        Product(4, "Shorts", 5.00, 10)
    ]);

    var clearNewProduct = () => {
        newProduct.name("");
        newProduct.price("");
        newProduct.stock("");
    };

    var addProduct = (context) => {
        var id = new Date().valueOf();
        var newProduct = Product(id, context.name(), context.price(), context.stock());
        catalog.push(newProduct);
        clearNewProduct();
    };

    var filteredCatalog = ko.computed(() => {
        //if catalog is empty return empty array
        if (!catalog()) {
            return [];
        }
        var filter = searchTerm().toLowerCase();
        //if filter is empty return all the catalog
        if (!filter) {
            return catalog();
        }
        //filter data
        var filtered = ko.utils.arrayFilter(catalog(), function (item) {
            var fields = ["name"]; //we can filter several properties
            var i = fields.length;
            while (i--) {
                var prop = fields[i];
                var strProp = ko.unwrap(item[prop]).toLocaleLowerCase(); if (strProp.indexOf(filter) !== -1) {
                    return true;
                };
            }
            return false;
        });
        return filtered;
    });


    return {
        searchTerm: searchTerm,
        catalog: filteredCatalog,
        newProduct: newProduct,
        addProduct: addProduct
    }
})();


ko.applyBindings(vm);//This how knockout is activated

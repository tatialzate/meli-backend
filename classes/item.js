const Price = require('./price');

class Item {
    constructor( product ) {
        this.id = product.id;
        this.title = product.title;
        this.price = new Price( product.prices.prices );
        this.picture = product.thumbnail;
        this.condition = product.condition;
        this.free_shipping = product.shipping.free_shipping;
        this.sold_quantity = product.sold_quantity;
        this.description = product.description;
    }
}

module.exports = Item;
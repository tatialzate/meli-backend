const Price = require('./price');

class Item {
    constructor( product ) {
        this.id = product.id;
        this.title = product.title;
        this.price = new Price ( product.currency_id, product.price );
        this.picture = this.getImage(product.thumbnail_id);
        this.condition = product.condition;
        this.free_shipping = product.shipping.free_shipping;
        this.sold_quantity = product.sold_quantity;
        this.description = product.descriptions;
    }

    getImage = (id) => {
        return `https://http2.mlstatic.com/D_NQ_NP_${id}-F.webp`
    }
}

module.exports = Item;
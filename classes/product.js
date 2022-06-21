const Author = require('./author');
const Item = require('./item');
class Product {
    constructor( data ) {
        this.author = new Author();
        this.item = new Item ( data.body );
    }
}

module.exports = Product;
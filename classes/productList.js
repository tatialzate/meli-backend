const Author = require('./author');
const Item = require('./item');
class ProductList {
    constructor( data, limit) {
        this.author = new Author('', '');
        this.categories = this.getCategories( data.available_filters );
        this.items = this.getProducts( data.results );
    }

    getCategories = ( categories ) => {
        return categories.length 
            ? categories[0].values.map( category => category.name )
            : [];
    }

    getProducts = ( items ) => {
        let productsList = items.length ? items : [];
        return productsList.map( product => new Item (product));
    }
}

module.exports = ProductList;
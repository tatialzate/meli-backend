const Author = require('./author');
const Item = require('./item');

const DEFAULT_LIMIT = 4;

class ProductList {
    constructor( data, limit) {
        this.author = new Author('', '');
        this.categories = this.getCategories( data.available_filters );
        this.items = this.getProducts( data.results, limit);
    }

    getCategories = ( categories ) => {
        return categories.length 
                    ? categories[0].values.map( category => category.name )
                    : [];
    }

    getProducts = ( items, limit ) => {
        //TODO: Revisar constante para parámeytro del slice
        let productsList = items.length ? items.slice(0, parseInt( limit ) || DEFAULT_LIMIT ) : [];

        return productsList.map( product => new Item (product));
    }
}

module.exports = ProductList;
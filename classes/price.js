class Price {
    constructor( currency_id = '', amount = '' ){
        this.currency = currency_id;
        this.amount = amount;
        this.decimals = '';
    }
}

module.exports = Price;
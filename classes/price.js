class Price {
    constructor( price ){
        this.currency = price[0].currency_id;
        this.amount = price[0].amount;
        this.decimals = '';
    }
}

module.exports = Price;
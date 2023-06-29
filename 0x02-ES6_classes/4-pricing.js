import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Setters
  set amount(amount) {
    if (isNaN(amount)) {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = amount;
    }
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a Currency');
    }
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency.name;
  }

  get currency_code() {
    return this._currency.code;
  }

  // Methods
  displayFullPrice() {
    return `${this.amount} ${this.currency} (${this.currency_code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (!isNaN(amount) && !isNaN(conversionRate)) {
      return amount * conversionRate;
    }
    if (isNaN(amount)) {
      throw new TypeError('Amount must be a number');
    } else {
      throw new TypeError('Conversionrate must be a number');
    }
  }
}

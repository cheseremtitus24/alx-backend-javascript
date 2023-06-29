import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Setters
  set amount(amount) {
    if (Number.isNaN(amount)) {
      throw new TypeError('Amount must be a number');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._amount = amount;
    }
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      // eslint-disable-next-line no-underscore-dangle
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a Currency');
    }
  }

  // Getters
  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  // Methods
  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (!Number.isNaN(amount) && !Number.isNaN(conversionRate)) {
      return amount * conversionRate;
    }
    if (Number.isNaN(amount)) {
      throw new TypeError('Amount must be a number');
    } else {
      throw new TypeError('Conversion rate must be a number');
    }
  }
}

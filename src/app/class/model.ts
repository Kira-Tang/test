export class Address {
    streetAddress: string;
    state: string;
    country: string;
    constructor() {
        this.streetAddress = '';
        this.state = '';
        this.country = '';
    }
}

export class Payment {
    cardNumber: string;
    expirationDate: string;
    veriCode: string;
    constructor() {
        this.cardNumber = '';
        this.expirationDate = '';
        this.veriCode = '';
    }
}

export class Order {
    address: Address;
    payment: Payment;
    constructor() {
        this.address = new Address();
        this.payment = new Payment();
    }
}

import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormControl } from '@angular/forms';
import { Order } from '../class/model';
@Component({
  selector: 'app-after-pay',
  templateUrl: './after-pay.component.html',
  styleUrls: ['./after-pay.component.css']
})
export class AfterPayComponent implements OnInit {
  Order: Order;
  constructor(private orderService: OrderService) {
  this.Order = new Order();
  }
  // streetAddress: string;
  // state: string;
  // country: string;
  // cardNumber: string;
  // expirationDate: string;
  // veriCode: string;
  checkEmpty1() {
    this.Order.address.streetAddress = ( document.getElementById('streetAddress') as HTMLInputElement).value;
    if (this.Order.address.streetAddress === '') {
      document.getElementById('street').style.display = 'inline';
    }
    if (this.Order.address.streetAddress !== '') {
      document.getElementById('street').style.display = 'none';
    }
  }

  checkEmpty2() {
    this.Order.address.state = ( document.getElementById('state') as HTMLInputElement).value;
    if (this.Order.address.state === '' ) {
      document.getElementById('STATE').style.display = 'inline';
    }
    if (this.Order.address.state !== '' ) {
      document.getElementById('STATE').style.display = 'none';
    }
  }

  checkEmpty3() {
    this.Order.address.country = ( document.getElementById('country') as HTMLInputElement).value;
    if ( this.Order.address.country === '') {
      document.getElementById('COUNTRY').style.display = 'inline';
    }
    if ( this.Order.address.country !== '') {
      document.getElementById('COUNTRY').style.display = 'none';
    }
  }

  checkEmpty4() {
    this.Order.payment.cardNumber = ( document.getElementById('cardNumber') as HTMLInputElement).value;
    if (this.Order.payment.cardNumber === '') {
      document.getElementById('cardN').style.display = 'inline';
    }
    if (this.Order.payment.cardNumber !== '') {
      document.getElementById('cardN').style.display = 'none';
    }
  }

  checkEmpty5() {
    this.Order.payment.expirationDate = ( document.getElementById('MM/YY') as HTMLInputElement).value;
    if (this.Order.payment.expirationDate === '' ) {
      document.getElementById('Date').style.display = 'inline';
    }
    if (this.Order.payment.expirationDate !== '' ) {
      document.getElementById('Date').style.display = 'none';
    }
  }

  checkEmpty6() {
    this.Order.payment.veriCode = ( document.getElementById('veriCode') as HTMLInputElement).value;
    if ( this.Order.payment.veriCode === '') {
      document.getElementById('Vericode').style.display = 'inline';
    }
    if ( this.Order.payment.veriCode !== '') {
      document.getElementById('Vericode').style.display = 'none';
    }
  }


  nextPart() {
    if (this.Order.address.streetAddress === '') {
      document.getElementById('street').style.display = 'inline';
    }
    if (this.Order.address.state === '' ) {
      document.getElementById('STATE').style.display = 'inline';
    }
    if (this.Order.address.country === '') {
      document.getElementById('COUNTRY').style.display = 'inline';
    }
    if (this.Order.address.streetAddress === ''
     || this.Order.address.state === '' ||
      this.Order.address.country === '') {
      return;
    }
    document.getElementById('street').style.display = 'none';
    document.getElementById('STATE').style.display = 'none';
    document.getElementById('COUNTRY').style.display = 'none';
    document.getElementById('address').style.display = 'none';
    document.getElementById('payment').style.display = 'block';
  }

  submit() {
    if (this.Order.payment.cardNumber === '') {
      document.getElementById('cardN').style.display = 'inline';
    }
    if (this.Order.payment.expirationDate === '' ) {
      document.getElementById('Date').style.display = 'inline';
    }
    if ( this.Order.payment.veriCode === '') {
      document.getElementById('Vericode').style.display = 'inline';
    }
    if (this.Order.payment.cardNumber === '' ||
    this.Order.payment.expirationDate === '' ||
    this.Order.payment.veriCode === '') {
      return;
    }
    document.getElementById('cardN').style.display = 'none';
    document.getElementById('Date').style.display = 'none';
    document.getElementById('Vericode').style.display = 'none';
    this.orderService.sendData(this.Order).subscribe();
  }

  ngOnInit() {

  }

}

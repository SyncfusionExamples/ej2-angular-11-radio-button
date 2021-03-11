import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
  <li><ejs-radiobutton label="Credit/Debit Card" name="default"></ejs-radiobutton></li>
  <li><ejs-radiobutton label="Internet Banking" name="default"></ejs-radiobutton></li>
  <li><ejs-radiobutton label="Cash on Delivery" name="default"></ejs-radiobutton></li>
  <li><ejs-radiobutton label="Other Wallets" name="default"></ejs-radiobutton></li>
  </ul>`
})
export class AppComponent {
  title = 'angular11Radio-app';
}

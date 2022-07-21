import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Currency } from './currency';
import { CurrencyService } from './currency.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title= "";
  Currencies: Currency[] = [];
  success:string = ""
  error : string =""

  constructor(private Service: CurrencyService) {
  }

  ngOnInit():void{
    this.getCurrencies();

  }
  getCurrencies(): void {
    this.Service
    .getAll()
    .subscribe(
      (data: Currency[]) => {
        this.Currencies = data
        this.success = 'Operation success'
      },
      (err) => {
        console.log(err)
        this.error = err.message;
      }
    );
}

}

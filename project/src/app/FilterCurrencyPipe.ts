
import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from './currency';

@Pipe({
  name: 'filterCurrency'
})
export class FilterCurrencyPipe implements PipeTransform {
  transform(currencies: Currency[]): any {
    let filteredCurrencies: Currency[] = new Array<Currency>();
    if (currencies && currencies.length > 0) {

    filteredCurrencies = new Array<Currency>();

      currencies.forEach(currency => {debugger
        if (currency.CHANGE < 0 )
        {
            filteredCurrencies.push(currency);
        }
      });
      return filteredCurrencies;
    }
  }
}

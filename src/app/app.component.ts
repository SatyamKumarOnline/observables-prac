import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from './shared/services/api-service.service';
import { Country } from './shared/model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public continentDropdown = new FormControl();
  public countryDropDown = new FormControl();
  public countryList: Country[] = [];
  public currSelectedContinent: String = '';
  public currSelectedCountry: String = '';
  private endPointUrl: string = '';

  constructor(apiServiceService: ApiServiceService) {
    this.continentDropdown.valueChanges.subscribe((selectedValue) =>
      this.currSelectedContinent = selectedValue
    );

    this.countryDropDown.valueChanges.subscribe((countryItem) => {
      this.currSelectedCountry = countryItem;
    }
    );

    this.endPointUrl = 'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json';

    apiServiceService.getItemList(this.endPointUrl).subscribe(
      data => {
        debugger;
        this.countryList = data;
        // console.log(data.data);
      }
    );
  }

  ngAfterviewInit() {
    this.handleClick()
  }

  handleClick() {

  }
}

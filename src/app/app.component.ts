import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from './shared/services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public continentDropdown = new FormControl();
  public currSelectedContinent: String = '';
  private endPointUrl : string = '';

  constructor(apiServiceService : ApiServiceService) {
    this.continentDropdown.valueChanges.subscribe((selectedValue) =>
    this.currSelectedContinent = selectedValue
    );
    this.endPointUrl = 'https://fakerapi.it/api/v1/images?_quantity=10&_type=kittens';
    apiServiceService.getItemList(this.endPointUrl).subscribe(
      data => {
        console.log(data.data);
      }
      );
  }
}

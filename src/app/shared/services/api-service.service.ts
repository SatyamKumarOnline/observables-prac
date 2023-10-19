import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import { Country, ItemList } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public getItemList(endPointUrl: string) : Observable<Country[]> {
    return this.http.get<Country[]>(endPointUrl);
  }
}

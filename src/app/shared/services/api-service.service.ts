import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import { ItemList } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public getItemList(endPointUrl: string) : Observable<ItemList> {
    return this.http.get<ItemList>(endPointUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itensUrl = 'http://localhost:8080/creditLimit';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(this.itensUrl);
  }

  add(item: any) {
    return this.http.post(this.itensUrl + "/new/save", item);
  }

}

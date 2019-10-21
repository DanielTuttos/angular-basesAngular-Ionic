import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get("https://onca-social-club-de3fc.firebaseio.com/jugadores.json");
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(
    private http: HttpClient,
  ) { }

  public coffeeListing() {
    return this.http.get<Coffee[]>('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
  }
}

import { Router, RouterLink } from '@angular/router';
import { Coffee } from './../../models/coffee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  public coffeeSelected: Coffee | null = null;

  constructor(
    private router: Router,
  ) {
    const coffee = localStorage.getItem('coffee-selected');
    if (coffee) {
      this.coffeeSelected = JSON.parse(coffee) as Coffee;
      console.log('Coffee: ', this.coffeeSelected);
    } else {
      router.navigate(['collection']);
    }
  }
}

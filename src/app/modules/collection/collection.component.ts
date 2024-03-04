import { Router } from '@angular/router';
import { Coffee } from './../../models/coffee';
import { CoffeeService } from './../../services/coffee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {

  public coffeeListing: Coffee[] = [];

  constructor(
    private coffeeService: CoffeeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.coffeeService.coffeeListing().subscribe((data: Coffee[]) => {
      console.log('Data received: ', data);
      this.coffeeListing = data as Coffee[];
    });
  }

  public viewDetail(item: any) {
    console.log('Item: ', item);
    localStorage.setItem('coffee-selected', JSON.stringify(item));
    this.router.navigate(['details']);
  }

}

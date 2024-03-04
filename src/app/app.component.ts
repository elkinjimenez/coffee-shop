import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionComponent } from './modules/collection/collection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

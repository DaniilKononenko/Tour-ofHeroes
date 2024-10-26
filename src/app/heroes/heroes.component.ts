import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Hero } from '../hero/Hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }
}

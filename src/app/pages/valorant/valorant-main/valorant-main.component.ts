import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valorant-main',
  standalone: false,
  templateUrl: './valorant-main.component.html',
  styleUrl: './valorant-main.component.scss'
})
export class ValorantMainComponent {
  constructor(private router: Router) {}

}

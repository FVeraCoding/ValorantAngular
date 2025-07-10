import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantService } from '../../../../services/valorant.service';

@Component({
  selector: 'app-weapons-details',
  templateUrl: './weapons-details.component.html',
  styleUrls: ['./weapons-details.component.scss'],
  standalone: false,
})
export class WeaponsDetailsComponent implements OnInit {
  weapon: any;
  tips: string[] = [
    "Apunta a la cabeza para maximizar el daño.",
    "Controla el retroceso en ráfagas largas.",
    "Es ideal para combates de media distancia.",
    "La primera bala tiene mejor precisión.",
    "Buena opción para rondas de compra completa."
  ];

  constructor(private route: ActivatedRoute, private valorantService: ValorantService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.valorantService.getWeaponById(id).subscribe(data => {
        this.weapon = data;
      });
    }
  }
}

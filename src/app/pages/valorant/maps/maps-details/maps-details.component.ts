import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantService } from '../../../../services/valorant.service';

@Component({
  selector: 'app-maps-details',
  standalone: false,
  templateUrl: './maps-details.component.html',
  styleUrl: './maps-details.component.scss'
})

export class MapsDetailsComponent {
  map: any;

  constructor(private route: ActivatedRoute, private valorantService: ValorantService){}

  ngOnInit(): void{
    const uuid = this.route.snapshot.paramMap.get('id');
    console.log(uuid);

    if(uuid){
      this.valorantService.getMapById(uuid).subscribe(data =>  {
        this.map = data;

        console.log(this.map);
      });
    }
  }

}

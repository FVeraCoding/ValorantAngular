import { Component } from '@angular/core';
import { ValorantService } from '../../../services/valorant.service';

@Component({
  selector: 'app-maps',
  standalone: false,
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {

  constructor(private valorantService: ValorantService) {}

  mapsOriginal: any[] = [];    
  searchTerm: string = '';     
  activeType: string = 'All';   

  ngOnInit(): void {
    this.valorantService.getMaps().subscribe(data => {
      this.mapsOriginal = data;
    });
  }

  filteredMaps(): any[] {
    if (!this.searchTerm) {
      return this.mapsOriginal;
    }
    return this.mapsOriginal.filter(map =>
      map.displayName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  

  
  updateSearch(event: any) {
    this.searchTerm = event.target.value;
  }

}

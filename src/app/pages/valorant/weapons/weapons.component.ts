import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../../../services/valorant.service';

@Component({
  selector: 'app-weapons',
  standalone: false,
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.scss'
})
export class WeaponsComponent implements OnInit {
  weapons: any[] = [];
  filteredWeapons: any[] = [];
  categories: string[] = ['All', 'Armas de mano', 'Subfusiles', 'Escopetas', 'Rifles', 'Fusiles de francotirador', 'Armas pesadas'];
  activeCategory = 'All';
  searchTerm = '';

  constructor(private valorantService: ValorantService) {}

  ngOnInit(): void {
    this.valorantService.getWeapons().subscribe(data => {
      this.weapons = data;
      this.filteredWeapons = data;
    });
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.filterWeapons();
  }

  updateSearch(event: any) {
    this.searchTerm = event.target.value;
    this.filterWeapons();
  }

  filterWeapons() {
    this.filteredWeapons = this.weapons.filter(w => {
      const matchesName = w.displayName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory =
        this.activeCategory === 'All' ||
        w.shopData?.categoryText?.toLowerCase().includes(this.activeCategory.toLowerCase());

      return matchesName && matchesCategory;
    });
  }
}

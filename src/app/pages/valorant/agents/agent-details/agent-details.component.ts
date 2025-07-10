import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantService } from '../../../../services/valorant.service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
  standalone: false,
})
export class AgentDetailsComponent implements OnInit {
  agent: any;

  constructor(
    private route: ActivatedRoute,
    private valorantService: ValorantService
  ) {}

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('id');
    if (uuid) {
      this.valorantService.getAgentById(uuid).subscribe(data => {
        this.agent = data;
      });
    }
  }

  getSlotName(slot: string): string {
    switch (slot) {
      case 'Ability1': return 'Habilidad 1';
      case 'Ability2': return 'Habilidad 2';
      case 'Grenade': return 'Habilidad secundaria';
      case 'Ultimate': return 'Definitiva';
      default: return '';
    }
  }
}

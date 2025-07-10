import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../../../services/valorant.service';

@Component({
  standalone: false,
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  originalAgents: any[] = [];
  filteredAgents: any[] = [];
  searchTerm: string = '';
  activeRole: string = 'Todos';

  constructor(private valorantService: ValorantService) {}

  ngOnInit(): void {
    this.valorantService.getAgents().subscribe(data => {
      this.originalAgents = data;
      this.filteredAgents = data;
    });
  }

  filterAgents() {
    this.filteredAgents = this.originalAgents.filter(agent => {
      const nameMatches = agent.displayName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const roleMatches = this.activeRole === 'Todos' || agent.role?.displayName === this.activeRole;
      return nameMatches && roleMatches;
    });
  }

  setRole(role: string) {
    this.activeRole = role;
    this.filterAgents();
  }

  updateSearch(event: any) {
    this.searchTerm = event.target.value;
    this.filterAgents();
  }
}

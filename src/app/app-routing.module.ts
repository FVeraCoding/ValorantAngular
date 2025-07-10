import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValorantMainComponent } from './pages/valorant/valorant-main/valorant-main.component';
import { AgentsComponent } from './pages/valorant/agents/agents.component';
import { AgentDetailsComponent } from './pages/valorant/agents/agent-details/agent-details.component';
import { MapsComponent } from './pages/valorant/maps/maps.component';
import { MapsDetailsComponent } from './pages/valorant/maps/maps-details/maps-details.component';
import { WeaponsComponent } from './pages/valorant/weapons/weapons.component';
import { WeaponsDetailsComponent } from './pages/valorant/weapons/weapons-details/weapons-details.component';


const routes: Routes = [
  { path: 'valorant', component: ValorantMainComponent},
  { path: 'valorant/agents', component: AgentsComponent},
  { path: 'valorant/agents/:id', component: AgentDetailsComponent },
  { path: 'valorant/maps', component: MapsComponent},
  { path: 'valorant/maps/:id', component: MapsDetailsComponent },
  { path: 'valorant/weapons', component: WeaponsComponent },
  { path: 'valorant/weapons/:id', component: WeaponsDetailsComponent },
  { path: '', redirectTo:'valorant', pathMatch:'full'},
  { path: '**', redirectTo: 'valorant'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 
  exports: [RouterModule] // 
})
export class AppRoutingModule { }

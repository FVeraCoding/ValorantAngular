import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ValorantMainComponent } from './pages/valorant/valorant-main/valorant-main.component';
import { AgentsComponent } from './pages/valorant/agents/agents.component';
import { ValorantHeaderComponent } from './pages/valorant/valorant-header/valorant-header.component';
import { AgentDetailsComponent } from './pages/valorant/agents/agent-details/agent-details.component';
import { MapsComponent } from './pages/valorant/maps/maps.component';
import { MapsDetailsComponent } from './pages/valorant/maps/maps-details/maps-details.component';
import { WeaponsComponent } from './pages/valorant/weapons/weapons.component';
import { WeaponsDetailsComponent } from './pages/valorant/weapons/weapons-details/weapons-details.component';

@NgModule({
  declarations: [
    AppComponent, 
    ValorantMainComponent, 
    AgentsComponent, 
    ValorantHeaderComponent, AgentDetailsComponent, MapsComponent, MapsDetailsComponent, WeaponsComponent, WeaponsDetailsComponent],
    
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule, HttpClientModule, FormsModule, ReactiveFormsModule], 
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

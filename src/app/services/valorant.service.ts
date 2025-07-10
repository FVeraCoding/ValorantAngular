import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {



  constructor(private http: HttpClient) { }

  getAgents(): Observable<any[]>{
    return this.http.get<any>('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES').pipe(
      map(res => res.data)
    )
  }

  getAgentById(uuid: string): Observable<any> {
    return this.http.get<any>(`https://valorant-api.com/v1/agents/${uuid}?language=es-ES`)
      .pipe(map(res => res.data));
  }

  getMaps(): Observable<any[]> {
    const url = 'https://valorant-api.com/v1/maps?language=es-ES';
    return this.http.get<{ data: any[] }>(url).pipe(map(res => res.data));
  }

  getMapById(uuid: string): Observable<any> {
    return this.http.get<any>(`https://valorant-api.com/v1/maps/${uuid}?language=es-ES`)
    .pipe(map(res => res.data));
  }

  getWeapons(): Observable<any[]> {
    return this.http.get<any>(`https://valorant-api.com/v1/weapons?language=es-ES`)
      .pipe(map(res => res.data));
  }

  getWeaponById(uuid: string): Observable<any> {
    return this.http.get<any>(`https://valorant-api.com/v1/weapons/${uuid}?language=es-ES`)
      .pipe(map(res => res.data));
  }
  
}

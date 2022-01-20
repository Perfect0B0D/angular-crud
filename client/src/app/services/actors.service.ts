/*  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                                _
 *              ___ ___ ___ _____|_|_ _ _____
 *             | . |  _| -_|     | | | |     |  LICENCE
 *             |  _|_| |___|_|_|_|_|___|_|_|_|
 *             |_|
 *
 *   PROGRAMOVÁNÍ  <>  DESIGN  <>  PRÁCE/PODNIKÁNÍ  <>  HW A SW
 *
 * Tento zdrojový kód je součástí výukových seriálů na
 * IT sociální síti WWW.ITNETWORK.CZ
 *
 * Kód spadá pod licenci prémiového obsahu a vznikl díky podpoře
 * našich členů. Je určen pouze pro osobní užití a nesmí být šířen.
 * Více informací na http://www.itnetwork.cz/licence
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './models/person.model';
import {Role} from './models/role.model';
import {ActorFilter} from './models/actor-filter.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  get roles() {
    return [
      new Role('actor', 'Actor'),
      new Role('director', 'Director'),
    ];
  }

  getActors(filter: ActorFilter = null): Observable<Array<Person>> {
    return this.httpClient.get<Array<Person>>('/api/actors',
      {params: this.getHttpParams(filter)}
      );
  }

  getDirectors(filter: ActorFilter = null): Observable<Array<Person>> {
    return this.httpClient.get<Array<Person>>('/api/directors',
      {params: this.getHttpParams(filter)}
      );
  }

  addPerson(actor: Person) {
    return this.httpClient.post(`/api/people`, actor);
  }

  getPerson(id: string) {
    return this.httpClient.get(`/api/people/${id}`);
  }

  removePerson(person: Person) {
    return this.httpClient.delete(`/api/people/${person._id}`);
  }

  editPerson(person: Person) {

    const body = {
      name: person.name,
      birthDate: person.birthDate,
      country: person.country,
      biography: person.biography,
      role: person.role
    };

    return this.httpClient.put(`/api/people/${person._id}`, body);
  }

  private getHttpParams(filter: ActorFilter): HttpParams {
    let params = new HttpParams();

    if (filter != null  && filter.limit !== null) {
      params = params.set('limit', filter.limit.toString());
    }

    return params;
  }
}

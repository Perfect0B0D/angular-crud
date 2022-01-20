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

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActorFilter} from '../../services/models/actor-filter.model';
import {ActorsService} from '../../services/actors.service';

@Component({
  selector: 'app-actors-filter',
  templateUrl: './actors-filter.component.html',
  styleUrls: ['./actors-filter.component.css']
})
export class ActorsFilterComponent implements OnInit {

  actorFilter = new ActorFilter();

  @Output()
  private onFilter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private actorsService: ActorsService) { }

  private get roles() {
    return this.actorsService.roles;
  }

  ngOnInit() {
    this.actorFilter.role = this.roles[0].key;
  }

}

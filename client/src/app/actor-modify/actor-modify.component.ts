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

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Person} from '../services/models/person.model';
import {NgForm} from '@angular/forms';
import {ActorsService} from '../services/actors.service';

@Component({
  selector: 'app-actor-modify',
  templateUrl: './actor-modify.component.html',
  styleUrls: ['./actor-modify.component.css']
})
export class ActorModifyComponent implements OnInit {

  @Input()
  actor: Person | null = new Person();

  @ViewChild(NgForm, {static: false})
  formRef: NgForm;

  constructor(private actorsService: ActorsService) { }

  private get roles() {
    return this.actorsService.roles;
  }

  get valid() {
    return this.formRef.form.valid;
  }

  ngOnInit() {
  }

}

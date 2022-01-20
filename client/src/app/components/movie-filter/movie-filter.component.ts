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
import {Person} from '../../services/models/person.model';
import {MovieFilter} from '../../services/models/movie-filter.model';
import {ActorsService} from '../../services/actors.service';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  movieFilter = new MovieFilter();

  private directors: Array<Person>;
  private actors: Array<Person>;
  private genres: Array<string>;

  @Output()
  private onFilter: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private readonly actorsService: ActorsService,
    private readonly moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.actorsService.getActors()
      .subscribe((actors) => this.actors = actors);

    this.actorsService.getDirectors()
      .subscribe((directors) => this.directors = directors);

    this.moviesService.getGenres()
      .subscribe((genres) => this.genres = genres);
  }

}

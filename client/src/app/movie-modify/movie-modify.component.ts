import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {ActorsService} from "../services/actors.service";
import {Person} from "../services/models/person.model";
import {NgForm} from "@angular/forms";
import {Movie} from "../services/models/movie.model";

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

@Component({
  selector: 'app-movie-modify',
  templateUrl: './movie-modify.component.html',
  styleUrls: ['./movie-modify.component.css']
})
export class MovieModifyComponent implements OnInit {

  @Input()
  movie: Movie | null = Movie.createEmpty();

  @ViewChild(NgForm, {static: false})
  formRef: NgForm;

  private actors: Person[];
  private directors: Person[];
  private genres: string[];

  constructor(private moviesService: MoviesService, private actorsService: ActorsService) {
  }

  get valid() {
    return this.formRef.valid;
  }

  ngOnInit() {
    this.actorsService.getActors().subscribe((data: Array<Person>) => {
      this.actors = data;
    });

    this.actorsService.getDirectors().subscribe((data: Array<Person>) => {
      this.directors = data;
    });

    this.moviesService.getGenres().subscribe((data: Array<string>) => {
      this.genres = data;
    });
  }

}

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

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './models/movie.model';
import {MovieFilter} from './models/movie-filter.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  getMovies(movieFilter: MovieFilter): Observable<Array<Movie>> {
    let params = new HttpParams();
    for (const key in movieFilter) {
      if (movieFilter.hasOwnProperty(key)) {
        const value = movieFilter[key];
        if (value !== null) {
          params = params.set(key, value.toString());
        }
      }
    }

    return this.httpClient.get<Array<Movie>>('/api/movies', {params});
  }

  getGenres(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>('/api/genres');
  }

  addMovie(movie: Movie) {
    const body = this.getMovieRequestBody(movie);
    return this.httpClient.post('/api/movies', body);
  }

  removeMovie(movie: Movie) {
    return this.httpClient.delete(`/api/movies/${movie._id}`);
  }

  editMovie(movie: Movie) {
    const body = this.getMovieRequestBody(movie);
    return this.httpClient.put(`/api/movies/${movie._id}`, body);
  }

  private getMovieRequestBody(movie: Movie): object {
    return {
      name: movie.name,
      directorID: movie.directorID,
      actorIDs: movie.actorIDs,
      isAvailable: movie.isAvailable,
      genres: movie.genres,
      year: movie.year
    };
  }
}

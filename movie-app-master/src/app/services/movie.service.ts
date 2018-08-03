import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { DataService } from "./dataservice.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MovieService extends DataService {
  constructor(http: Http) {
    super("", http);
  }
  getMovies(searchTerm?: string) {
    if (!this.isEmpty(searchTerm)) {
      let url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=3615d683`;
      return this.getAll(url).pipe(map(movies => movies.Search));
    }
    return this.getAll();
  }

  getMovieById(imdbId: string) {
    let url = `http://www.omdbapi.com/?i=${imdbId}&apikey=3615d683`;
    return this.getOne(url);
  }

  private isEmpty(str) {
    return !str || 0 === str.length;
  }
}

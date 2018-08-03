import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-movieslist",
  templateUrl: "./movieslist.component.html",
  styleUrls: ["./movieslist.component.css"]
})
export class MovieslistComponent {
  movies: any[];
  constructor(private movieService: MovieService) {}

  search(searchTerm) {
    this.movieService
      .getMovies(searchTerm)
      .subscribe(movies => (this.movies = movies.slice(0, 3)));
  }
}

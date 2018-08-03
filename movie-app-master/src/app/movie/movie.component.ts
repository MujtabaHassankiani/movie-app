import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  movie: any;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let imdbId: string;
    this.route.paramMap.subscribe(
      routeValues => (imdbId = routeValues.get("imdbID"))
    );
    this.movieService
      .getMovieById(imdbId)
      .subscribe(movie => (this.movie = movie));
  }
}

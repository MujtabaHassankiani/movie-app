import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";

import { AppComponent } from "./app.component";
import { MovieslistComponent } from "./movieslist/movieslist.component";
import { MovieService } from "./services/movie.service";
import { MovieComponent } from "./movie/movie.component";

@NgModule({
  declarations: [AppComponent, MovieslistComponent, MovieComponent],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: MovieslistComponent },
      { path: "movie/:imdbID", component: MovieComponent }
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}

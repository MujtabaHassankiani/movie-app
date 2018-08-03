import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private url: string, private http: Http) {}
  getAll(url?: string) {
    if (url) this.url = url;
    return this.http.get(this.url).pipe(map(response => response.json()));
  }
  getOne(url: string) {
    return this.http.get(url).pipe(map(response => response.json()));
  }
}

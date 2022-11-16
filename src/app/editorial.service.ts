import { Injectable} from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Editorial} from "./editorial";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})

export class EditorialService {
  constructor(private http: HttpClient,
              private login: LoginService) {}

  searchById(id: number): Observable<Editorial>{
    return this.http.get<Editorial>("http://localhost:8081/public/editorial/{id}" + id)

  }
}




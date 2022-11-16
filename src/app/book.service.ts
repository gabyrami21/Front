import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Book} from "./book";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: "root"
})
export class BookService {

  searchResults = new BehaviorSubject<Array<Book>>([]);

  constructor(private http: HttpClient,
              private login: LoginService) {
  }

  searchAllBooks() {
    this.http.get<Book[]>("http://localhost:8081/public/books").subscribe(
      results => {
        console.log(results);
        this.searchResults.next(results)
      }
    );
  }

  searchByName(name: string) {
    this.http.get<Book[]>("http://localhost:8081/book/" + name).subscribe(
      results => this.searchResults.next(results)
    );
  }

  searchByEditorialId(id: number){
    this.http.get<Book[]>("http://localhost8081/public/editorial/{id}" +id).subscribe(
      results => this.searchResults.next(results)
    );
  }

  deleteBookById(id: number):Observable<Book>{
    return this.http.delete<Book>("http://localhost:8081/admin/book/{id}" + id,{headers:{
      "Authorization": this.login.getToken()
      }})
  }

  createBook(name:string,editorialId:number, descripcion: string, url: string, cantidad: number): Observable<any>{
    return this.http.post("http://localhost:8081/admin/books", {
      name: name,
      description: descripcion,
      imageUrl: url,
      cantidad: cantidad,
      editorialId: editorialId
    },
      {headers:{
        "Authorization":this.login.getToken()
        }})
  }

  searchById( id: number):Observable<any>{
    return this.http.get<Book>("http://localhost:8081/public/book/{id}" + id)
  }

  updateBook(id: number,name:string,editorialId:number, descripcion: string, url: string, cantidad: number){
    return this.http.put("http://localhost:8081/admin/book/{id}" + id,{
      name: name,
      description: descripcion,
      imageUrl: url,
      cantidad: cantidad,
      editorialId: editorialId
    },
      {headers:{
          "Authorization":this.login.getToken()
        }})
  }


  OnResults() {
    return this.searchResults.asObservable();
  }
}

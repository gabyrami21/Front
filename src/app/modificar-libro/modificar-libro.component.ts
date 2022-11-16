import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {Book} from "../book";

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    nombre: '',
    editorialId: '',
    descripcion:'',
    url: '',
    cantidad:''
  });

  id:any
  book!: Book

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.id =params ['id'];
        this.bookService.searchById(this.id).subscribe({
          next: (result) => {
            this.book = result;
          }
        })
      }
    })

  }

  onSubmit(): void{
    let nameParam: string;
    let editorialParam: string;
    let descriptionParam: string;
    let urlParam: string;
    let cantidadParam: string

    nameParam = ''+this.checkoutForm.value.nombre;
    editorialParam = ''+this.checkoutForm.value.editorialId;
    descriptionParam = ''+this.checkoutForm.value.descripcion;
    urlParam = ''+this.checkoutForm.value.url;
    cantidadParam=''+this.checkoutForm.value.cantidad;
    this.bookService.updateBook(this.id,nameParam, +editorialParam,descriptionParam,urlParam,+cantidadParam).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (err) =>{
        alert("Error al modificar el libro");
      },
    });
    this.checkoutForm.reset();

  }

}

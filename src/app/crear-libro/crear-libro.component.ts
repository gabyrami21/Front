import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    nombre: '',
    editorialId: ' ',
    descripcion:' ',
    url: ' ',
    cantidad:' '
  });


  constructor( private formBuilder: FormBuilder,
               private bookService: BookService,
               private router: Router) { }

  ngOnInit(): void {


  }

  onSubmit(): void {

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
    this.bookService.createBook(nameParam, +editorialParam,descriptionParam,urlParam,+cantidadParam).subscribe({
                                    next: () => {
                                      this.router.navigateByUrl('/');
                                    },
                                    error: (err) =>{
                                      alert("Error al crear el libro");
                                    },
    });
    this.checkoutForm.reset();

  }
}

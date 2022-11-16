import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component'
import { LoginComponent } from './login/login.component'
import { Component} from "@angular/core";
import { CrearLibroComponent} from "./crear-libro/crear-libro.component";
import {ModificarLibroComponent} from './modificar-libro/modificar-libro.component';




const routes: Routes = [
                        { path: '', component: BooksComponent },
                        { path: 'login', component: LoginComponent },
                        {path: 'crearLibro',component:CrearLibroComponent},
                        {path: 'modificarLibro/:id',component:ModificarLibroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

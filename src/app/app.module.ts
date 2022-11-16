import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditorialComponent } from './editorial/editorial.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    EditorialComponent,
    CrearLibroComponent,
    ModificarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

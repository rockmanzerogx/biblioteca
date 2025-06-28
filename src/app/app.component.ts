import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterLink,
    RouterLinkActive,
    //CuadradoComponent,
    //ProductoComponent,
    //LinealComponent,
    //MultiplicativoComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-library';
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Agrega esto


import { AppComponent } from './app.component';
// ...otros imports...

@NgModule({
  declarations: [
    AppComponent,
    // ...otros componentes...
  ],
  imports: [
    BrowserModule,
    FormsModule,      // <-- Agrega esto
   
    // ...otros módulos...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


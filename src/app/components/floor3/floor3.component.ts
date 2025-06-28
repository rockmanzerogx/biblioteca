import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floor3',
  imports: [FormsModule, CommonModule],
  templateUrl: './floor3.component.html',
  styleUrls: ['./floor3.component.css']
})
export class Floor3Component implements OnInit {

  ct: number = 2013;
  tn: number = 0.02493;
  tm: number = 0.00743;
  tms: number = 2024;
  pbol: number = 10059856;
  pbolf: number = 0;
  tabla: any[] = [];

  cantidadDias: number = 1;
  horaPicoManana: string = '';
  horaPicoTarde: string = '';
  tablaDias: { horaManana: string, horaTarde: string }[] = [];

  ngOnInit(): void {
    this.tabla = [];
  }

  

  generarTabla() {
    this.tablaDias = [];
    for (let i = 0; i < this.cantidadDias; i++) {
      this.tablaDias.push({
        horaManana: this.horaPicoManana,
        horaTarde: this.horaPicoTarde
      });
    }
  }

  validInputs() {
    if (this.ct == null) return false;
    if (this.tn == null) return false;
    if (this.tm == null) return false;
    if (this.tms == null) return false;
    if (this.pbol == null) return false;
    if (this.ct < 0) return false;
    if (this.tn < 0) return false;
    if (this.tm < 0) return false;
    if (this.tms < 0) return false;
    if (this.pbol < 0) return false;
    return true
  }
}
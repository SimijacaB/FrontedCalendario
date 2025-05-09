import { Component } from '@angular/core';
import { FestivoResponse } from '../../../domain/festivos-response';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { SelectorFechaComponent } from '../selector-fecha/selector-fecha.component';
import { ListaEventosComponent } from '../lista-eventos/lista-eventos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    CommonModule,
    SelectorFechaComponent,
    ListaEventosComponent
  ],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  festivos: FestivoResponse[] = [];

  onFechaSeleccionada(fecha: string) {
    // Lógica para cargar festivos
  }
}
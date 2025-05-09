import { Component, Input } from '@angular/core';
import { FestivoResponse } from '../../../domain/festivos-response';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; // <-- Añade este import

@Component({
  selector: 'app-lista-eventos',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule // <-- Añade este módulo
  ],
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent {
  @Input() eventos: FestivoResponse[] = [];
}
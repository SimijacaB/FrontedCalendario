import { Component, Output, EventEmitter } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector-fecha',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './selector-fecha.component.html',
  styleUrls: ['./selector-fecha.component.css']
})
export class SelectorFechaComponent {
  @Output() fechaSeleccionada = new EventEmitter<string>();

  onFechaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.fechaSeleccionada.emit(input.value);
    }
  }
}
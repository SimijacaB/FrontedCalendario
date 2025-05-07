import { Component } from '@angular/core';
import { ApiFestivosService } from '../../insfraestructure/services/apiFestivos.service';
import { FormsModule } from '@angular/forms';       // Necesario para ngModel
import { CommonModule } from '@angular/common';   


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AppComponent {
  title = 'FrontedCalendario';

  public fechaSeleccionada: string = '';
  public isLoading: boolean = false;

  constructor(private apiFestivosService: ApiFestivosService) {}

  public validar(): void {
    if (!this.fechaSeleccionada) {
      alert('Por favor seleccione una fecha.');
      return;
    }

    const fecha = new Date(this.fechaSeleccionada);

    this.isLoading = true;

    this.apiFestivosService.validar(fecha).subscribe(isFeriado => {
      this.isLoading = false;

      if (isFeriado) {
        alert('¡La fecha seleccionada es un feriado!');
      } else {
        alert('La fecha seleccionada NO es un feriado.');
      }
    }, error => {
      this.isLoading = false; 
      console.error('Error consultando el API:', error);
      alert('Ocurrió un error al validar la fecha.');
    });
  }
}

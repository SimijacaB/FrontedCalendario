import { Component } from '@angular/core';
import { ApiFestivosService } from '../../insfraestructure/services/apiFestivos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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

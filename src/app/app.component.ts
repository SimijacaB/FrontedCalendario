import { Component } from '@angular/core';
import { FestivosService } from '../core/services/festivos.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

// ¡ESTA LÍNEA ES CLAVE! - 'export' debe estar presente
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Validación de Festivos</span>
    </mat-toolbar>
    
    <mat-card class="container">
      <mat-card-content>
        <mat-form-field appearance="fill">
          <mat-label>Seleccione una fecha</mat-label>
          <input matInput type="date" [(ngModel)]="fechaSeleccionada">
        </mat-form-field>

        <button mat-raised-button color="primary" (click)="validar()" [disabled]="isLoading">
          {{ isLoading ? 'Validando...' : 'Validar' }}
        </button>

        <mat-progress-spinner *ngIf="isLoading" mode="indeterminate" diameter="24"></mat-progress-spinner>

        <div *ngIf="resultadoValidacion !== undefined" class="resultado">
          <p *ngIf="resultadoValidacion" class="festivo">
            ✔️ La fecha seleccionada es festiva
          </p>
          <p *ngIf="!resultadoValidacion" class="no-festivo">
            ❌ La fecha seleccionada no es festiva
          </p>
        </div>

        <div *ngIf="error" class="error">
          Error al conectar con el servidor
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {  // <--- ¡LA PALABRA 'export' DEBE ESTAR PRESENTE!
  fechaSeleccionada: string = '';
  isLoading: boolean = false;
  resultadoValidacion?: boolean;
  error: boolean = false;
  festivos: any[] = [];

  constructor(private festivosService: FestivosService) {}

  validar() {
    if (!this.fechaSeleccionada) return;

    this.isLoading = true;
    this.error = false;
    this.resultadoValidacion = undefined;

    this.festivosService.validarFecha(this.fechaSeleccionada).subscribe({
      next: (response) => {
        this.resultadoValidacion = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = true;
        this.isLoading = false;
        console.error('Error:', err);
      }
    });
  }
}
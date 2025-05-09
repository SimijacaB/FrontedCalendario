import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { FestivosService } from '../core/services/festivos.service';
import { of, throwError } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let festivosServiceMock: any;

  beforeEach(async () => {
    // Mock del servicio
    festivosServiceMock = jasmine.createSpyObj('FestivosService', ['getFestivos']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: FestivosService, useValue: festivosServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar festivos correctamente', () => {
    const mockFestivos = [
      { id: 1, nombre: 'Navidad', fecha: '2023-12-25' }
    ];
    festivosServiceMock.getFestivos.and.returnValue(of(mockFestivos));

    fixture.detectChanges(); // Dispara ngOnInit()

    expect(component.festivos).toEqual(mockFestivos);
    expect(component.error).toBeFalsy();
  });

  it('debería manejar errores al cargar festivos', () => {
    festivosServiceMock.getFestivos.and.returnValue(throwError(() => new Error('Error de API')));

    fixture.detectChanges();

    expect(component.festivos.length).toBe(0);
    expect(component.error).toBeTruthy();
  });
});
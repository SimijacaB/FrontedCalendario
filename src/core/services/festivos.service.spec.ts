import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FestivosService } from './festivos.service';
import { environment } from '../../environment/environment';

describe('FestivosService', () => {
  let service: FestivosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Simula HTTP requests
      providers: [FestivosService]
    });
    service = TestBed.inject(FestivosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no hayan requests pendientes
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener festivos via GET', () => {
    const mockFestivos = [
      { id: 1, nombre: 'Navidad', fecha: '2023-12-25' }
    ];

    // Llamada al método real
    service.getFestivos().subscribe((festivos) => {
      expect(festivos).toEqual(mockFestivos);
    });

    // Simula la respuesta HTTP
    const req = httpMock.expectOne(`${environment.apiUrl}/api/festivos`);
    expect(req.request.method).toBe('GET');
    req.flush(mockFestivos); // Devuelve mockFestivos como respuesta
  });

  it('debería crear un festivo via POST', () => {
    const nuevoFestivo = { nombre: 'Año Nuevo', fecha: '2024-01-01' };

    service.crearFestivo(nuevoFestivo).subscribe((response) => {
      expect(response).toEqual(nuevoFestivo);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/api/festivos`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(nuevoFestivo);
    req.flush(nuevoFestivo);
  });
});
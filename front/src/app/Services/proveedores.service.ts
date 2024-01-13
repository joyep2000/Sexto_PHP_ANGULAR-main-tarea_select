import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProveedores } from '../Interface/iproveedores';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IProveedores[]> {
    return this.cliente.get<IProveedores[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IProveedores> {
    var proveedores = new FormData();
    return this.cliente.post<IProveedores>(this.urlBase + 'uno', proveedores);
  }
  insertar(proveedor: IProveedores): Observable<any> {
    var prod = new FormData();
    prod.append('nombre', proveedor.Nombres);
    prod.append('precio', proveedor.Telefono.toString());
    prod.append('stock', proveedor.Correo);
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(proveedor: IProveedores): Observable<any> {
    var prod = new FormData();
    prod.append('id', proveedor.ProveedorId.toString());
    prod.append('nombre', proveedor.Nombres);
    prod.append('precio', proveedor.Telefono.toString());
    prod.append('stock', proveedor.Correo);
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}

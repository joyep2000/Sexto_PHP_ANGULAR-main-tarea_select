import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../Interface/stocks';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR-main/Inventario/Controllers/Stock.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<Stock[]> {
    return this.cliente.get<Stock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<Stock> {
    var productos = new FormData();
    return this.cliente.post<Stock>(this.urlBase + 'uno', productos);
  }
  insertar(stocks: Stock): Observable<any> {
    var prod = new FormData();
    prod.append('producotid', stocks.ProductoId.toString());
    prod.append('proveedorid', stocks.ProveedorId.toString());
    prod.append('cantidad', stocks.Cantidad.toString());
    prod.append('precio_venta', stocks.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(stocks: Stock): Observable<any> {
    var prod = new FormData();    
    prod.append('producotid', stocks.ProductoId.toString());
    prod.append('proveedorid', stocks.ProveedorId.toString());
    prod.append('cantidad', stocks.Cantidad.toString());
    prod.append('precio_venta', stocks.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}

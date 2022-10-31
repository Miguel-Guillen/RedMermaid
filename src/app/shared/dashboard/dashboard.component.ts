import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/core/service/general.service';
import { ProductosService } from 'src/app/core/service/productos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productos: any[] = [];
  usuario: any = {}

  constructor(private _serviceGeneral: GeneralService, private _serviceProductos: ProductosService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('login') || '{}');
    this.cargarDatos();
  }

  cargarDatos(){
    this._serviceGeneral.getData(this.usuario.id).subscribe((res: any) => {
      const data = res[0];

      for(const busqueda of data.busquedas){
        this._serviceProductos.obtenerPorCategoria(busqueda).subscribe((response: any) => {
          response.forEach((producto: any) => {
            this.productos.push(producto);            
          });
        })
      }      
    })
  }
}

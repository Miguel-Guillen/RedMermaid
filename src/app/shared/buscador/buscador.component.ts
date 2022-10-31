import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/core/service/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  productos: any[] = [];
  productoForm: FormGroup;
  isEdit = false;
  id = '';

  constructor(private _serviceGeneral: ProductosService, private formB: FormBuilder) {
    this.productoForm = this.formB.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, Validators.min(10)],
      descuento: [0],
      proveedor: [''],
      categoria: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this._serviceGeneral.obtenerProductos().subscribe((res: any) => {
      res.forEach((producto: any) => {
        this.productos.push(producto);            
      });  
    })
  }

  nuevoProducto(data: any){
    if(this.isEdit === false){
      const ultimo = this.productos.length - 1;
      let producto = {
        id: this.productos[ultimo].id + 1,
        img: 'https://img.freepik.com/vector-gratis/ilustracion-icono-camara_53876-5563.jpg?w=826&t=st=1667188169~exp=1667188769~hmac=a84e24c9a401528bf66ddb7f6ee7526e17bc655cbe82783fec6c66e91d5c0df4',
        ... data
      }
      this.productos.push(producto);
    }else {
      const newArray = this.productos.filter(producto => producto.id != this.id);
      let producto = {
        id: this.id,
        img: 'https://img.freepik.com/vector-gratis/ilustracion-icono-camara_53876-5563.jpg?w=826&t=st=1667188169~exp=1667188769~hmac=a84e24c9a401528bf66ddb7f6ee7526e17bc655cbe82783fec6c66e91d5c0df4',
        ... data
      }
      newArray.push(producto);
      this.productos = newArray;
    }
    this.reset();
  }

  tomarDatos(producto: any){
    this.isEdit = true;
    this.productoForm.patchValue({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      descuento: producto.descuento,
      proveedor: producto.proveedor,
      categoria: producto.categoria
    })
    this.id = producto.id;
  }

  reset(){
    this.id = '';
    this.isEdit = false;
    this.productoForm.reset();
  }
}

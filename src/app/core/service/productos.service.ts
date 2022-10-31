import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: any = [
    {
      id: '001',
      nombre: 'tablet samsung',
      descripcion: 'tableta samsung',
      precio: 1300,
      descuento: 10,
      proveedor: 'Alcatel',
      categoria: 'tableta',
      img: 'https://img.freepik.com/psd-gratis/maqueta-telefono-inteligente-tableta_358694-65.jpg?w=1380&t=st=1667180391~exp=1667180991~hmac=2c7c7484a958c65d2c02c064e8784fe281e7e9cfb6234aee8623ef84c9b83ac3'
    },
    {
      id: '002',
      nombre: 'tablet lenovo',
      descripcion: 'tableta lenovo',
      precio: 1180,
      descuento: 0,
      proveedor: 'Lenovo',
      categoria: 'tableta',
      img: 'https://www.officedepot.com.mx/medias/100042611.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjA3ODAxfGltYWdlL2pwZWd8aGYyL2hmMC8xMDI2Mjc3NzQzMDA0Ni8xMDAwNDI2MTEuanBnXzEyMDBmdHd8YzRiOTMxNjMxMTUyZjRhNmQyNjZmY2M1YTU5MWE3ZjczMTU1NWJhNGJiNzJjODE5YWQ4MmVjN2U2ZTFjNzU5Zg'
    },
    {
      id: '003',
      nombre: 'tablet samsung',
      descripcion: 'tableta samsung',
      precio: 1300,
      descuento: 0,
      proveedor: 'Alcatel',
      categoria: 'tableta',
      img: 'https://img.freepik.com/psd-gratis/hombre-primer-plano-escribiendo-computadora-portatil_23-2148873359.jpg?w=1380&t=st=1667180493~exp=1667181093~hmac=37facd95fa5aa6facd8a9e84587aa854dfb15dfc8e08c44dd428c63ec0f86ce5'
    },
    {
      id: '004',
      nombre: 'laptop Dell Inspiron, Amd Ryzen 5',
      descripcion: 'laptop Dell Inspiron, Amd, Ryzen 5, 1TB, 8GB',
      precio: 11000,
      descuento: 10,
      proveedor: 'Dell',
      categoria: 'portatil',
      img: 'https://m.media-amazon.com/images/I/61-yln4IXjL._AC_SL1500_.jpg'
    },
    {
      id: '005',
      nombre: 'laptop HP Ryzen 5',
      descripcion: 'laptop HP, Amd Ryzen 5, 16GB, SSD 480GB',
      precio: 9600,
      descuento: 15,
      proveedor: 'HP',
      categoria: 'portatil',
      img: 'https://www.cyberpuerta.mx/img/product/L/CP-HP-5C6G5LT-bd65a6.png'
    },
    {
      id: '006',
      nombre: 'laptop HP, Intel I5',
      descripcion: 'laptop HP, Intel I5, 16GB, 1T',
      precio: 8800,
      descuento: 10,
      proveedor: 'HP',
      categoria: 'portatil',
      img: 'https://www.officedepot.com.mx/medias/100032851.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDYyNzQ2fGltYWdlL2pwZWd8aGUzL2g2Yi8xMTIwMDc5NzA0ODg2Mi8xMDAwMzI4NTEuanBnXzEyMDBmdHd8N2U4M2QwNTM3NWRmMTc1MzZkZmE0NGQ4OWM0NWEwYWY1ODQ4ZDg2NzAxNjJlNjlmMDMzNjQwN2M1NDU3ZTk2MA'
    },
    {
      id: '007',
      nombre: 'laptop Dell, Intel Pentium',
      descripcion: 'laptop Dell, Intel Pentium, SSD 240GB, 8GB',
      precio: 9800,
      descuento: 15,
      proveedor: 'Dell',
      categoria: 'portatil',
      img: 'https://m.media-amazon.com/images/I/417uyF+RUuL._AC_SY580_.jpg'
    },
    {
      id: '008',
      nombre: 'Xiaomi',
      descripcion: 'Xiaomi Mi A2, Android One, 4G, Camara Dual 12',
      precio: 3800,
      descuento: 0,
      proveedor: 'Snapdragon',
      categoria: 'smartphone',
      img: 'https://www.mistore.mx/90-large_default/xiaomi-mi-a2-android-one-4g-mexico-camara-dual-12-20-mp-frontal-20mp-snapdragon-660.jpg'
    },
    {
      id: '009',
      nombre: 'Samsung Galaxy S22',
      descripcion: 'Samsung Galaxy S22 Smartphone, 128 GB, cámara y video 8K',
      precio: 13000,
      descuento: 10,
      proveedor: 'Samsung',
      categoria: 'smartphone',
      img: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/03/Samsung-Galaxy-S22-2-1500x1000.jpg?resize=780%2C520&quality=60&strip=all&ssl=1'
    },
    {
      id: '010',
      nombre: 'PC Amd Ryzen 7',
      descripcion: 'PC Amd Ryzen 7, SSD 480GB, 32GB',
      precio: 15000,
      descuento: 15,
      proveedor: 'Xtreme Gaming',
      categoria: 'pc escritorio',
      img: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/4679ed6d-fe1d-4be3-9c76-d82a2114282d.68519e901efc6cd4052ef5d148bd4ed3.png?odnHeight=2000&odnWidth=2000&odnBg=ffffff'
    }
  ];

  constructor() { }

  obtenerProductos(){
    let observable = new Observable((observer) => {
      observer.next(this.productos);
    })
    return observable;
  }

  obtenerPorCategoria(categoria: string){
    const metadata = this.productos.filter((producto: any) => producto.categoria == categoria);    
    let observable = new Observable((observer) => {
      observer.next(metadata);
    })
    return observable;
  }
}

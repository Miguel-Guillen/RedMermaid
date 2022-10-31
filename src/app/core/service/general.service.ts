import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private usuarios: any[] = [
    {
      id: '001',
      busquedas: [
        'portatil',
        'pc escritorio'
      ]
    },
    {
      id: '003',
      busquedas: [
        'smartphone',
        'tabletas'
      ]
    },
    {
      id: '006',
      busquedas: [
        'smartphone',
        'portatil'
      ]
    }
  ];

  constructor() { }

  getData(id: string): Observable<any> {
    const metadata = this.usuarios.filter(usuario => usuario.id == id);    
    let observable = new Observable((observer) => {
      observer.next(metadata);
    })
    return observable;
  }
}

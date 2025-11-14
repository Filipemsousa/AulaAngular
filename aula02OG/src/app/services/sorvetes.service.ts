import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sabor } from '../interfaces/sabor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SorvetesService {

  private apiUrl = 'http://localhost:3001/sabores'

  constructor(private http:HttpClient) { }

  getSabores():Observable<Sabor[]>{
    return this.http.get<Sabor[]>(this.apiUrl)
  }
}

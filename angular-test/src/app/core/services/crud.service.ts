import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../..//enviroments/environment';
import { DataJson, SendDataJson } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private http: HttpClient) { }

  getData(idSpecific: string){
    return this.http.get<any>(`${environment.urlApi}${idSpecific}`);
  }

  addData(data: SendDataJson){
    return this.http.post<DataJson>(`${environment.urlApi}`, data);
  }

  updateData(data: DataJson, idSpecific: string){
    return this.http.put<DataJson>(`${environment.urlApi}${idSpecific}`, data)
  }

  deleteData(idSpecific: string){
    return this.http.delete(`${environment.urlApi}${idSpecific}`);
  }
}

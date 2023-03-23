import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefeiroApiService {
  readonly tarefeiroAPIUrl = "https://localhost:7055/api";

  constructor(private http:HttpClient) { }


  //Tarefas
  getTarefaList(): Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + '/tarefas');
  }

  addTarefa(data:any){
    return this.http.post(this.tarefeiroAPIUrl + '/tarefas', data);
  }

  updateTarefa(id: number|string,data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/tarefas/${id}`,data);
  }

  deleteTarefa(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefas/${id}`);
  }

  //Tarefas Tipos

  getTarefaTiposList(): Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + '/tarefasTipos');
  }

  addTarefaTipos(data:any){
    return this.http.post(this.tarefeiroAPIUrl + '/tarefasTipos', data);
  }

  updateTarefaTipos(id: number|string,data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/tarefasTipos/${id}`,data);
  }

  deleteTarefaTipos(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/tarefasTipos/${id}`);
  }

  //Status

  getStatusList(): Observable<any[]>{
    return this.http.get<any>(this.tarefeiroAPIUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.tarefeiroAPIUrl + '/status', data);
  }

  updateStatus(id: number|string,data:any){
    return this.http.put(this.tarefeiroAPIUrl + `/status/${id}`,data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.tarefeiroAPIUrl + `/status/${id}`);
  }

}

import { Component,OnInit } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';

@Component({
  selector: 'app-show-tarefeiro',
  templateUrl: './show-tarefeiro.component.html',
  styleUrls: ['./show-tarefeiro.component.css']
})
export class ShowTarefeiroComponent implements OnInit {

  tarefeiroList$!:Observable<any[]>;
  tarefeiroTiposList$!:Observable<any[]>;
  tarefeiroTiposList:any=[];

  //map para mostrar a associação entre as tabelas (FK)
  tarefeiroTiposMap: Map<number, string> = new Map()

  constructor(private service:TarefeiroApiService){ }

  ngOnInit(): void{
    this.tarefeiroList$ = this.service.getTarefaList();
    this.tarefeiroTiposList$ = this.service.getTarefaTiposList();
    this.refreshTarefeiroTiposMap();

  }

  //variaveis (propriedades)
  modalTitle:string = '';
  activateAddEditTarefeiroComponent: boolean=false;
  tarefeiro:any;

  modalAdd(){
    this.tarefeiro = {
      id:0,
      status:null,
      comentario:null,
      tarefaTipoId:null,
    }
    this.modalTitle = "Nova tarefa";
    this.activateAddEditTarefeiroComponent = true;
  }

  modalEdit(item:any){
    this.tarefeiro = item;
    this.modalTitle = "Edição de Tarefa";
    this.activateAddEditTarefeiroComponent = true;
  }

  modalClose(){
    this.activateAddEditTarefeiroComponent = false;
    this.tarefeiroList$ = this.service.getTarefaList();
  }

  refreshTarefeiroTiposMap(){
    this.service.getTarefaTiposList().subscribe(data =>{
      this.tarefeiroTiposList = data;

      for(let i=0; i < data.length ; i++){
        this.tarefeiroTiposMap.set(this.tarefeiroTiposList[i].id,
          this.tarefeiroTiposList[i].tarefaNome)
      }
    })
  }

}

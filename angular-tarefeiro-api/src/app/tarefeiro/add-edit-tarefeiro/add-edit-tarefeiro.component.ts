import { Component, Input ,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefeiroApiService } from 'src/app/tarefeiro-api.service';


@Component({
  selector: 'app-add-edit-tarefeiro',
  templateUrl: './add-edit-tarefeiro.component.html',
  styleUrls: ['./add-edit-tarefeiro.component.css']
})
export class AddEditTarefeiroComponent implements OnInit{

  tarefaList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  tarefaTipoList$!: Observable<any[]>;

  constructor(private service : TarefeiroApiService){ }


  @Input() tarefa:any;
  id: number =0;
  status: string = "";
  comentario: string = "";
  tarefaTipoId!: number;

  ngOnInit(): void{
    this.id = this.tarefa.id;
    this.status = this.tarefa.status;
    this.comentario = this.tarefa.comentario;
    this.tarefaTipoId = this.tarefaTipoId;
    this.statusList$ = this.service.getStatusList();
    this.tarefaTipoList$ = this.service.getTarefaTiposList();
    this.tarefaList$ = this.service.getTarefaList();
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './user-modal/user-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usuarios?: Usuario[];

  constructor(http: HttpClient, private modalService: NgbModal) {
    http.get<Usuario[]>('/usuario').subscribe(result => {
      this.usuarios = result;
      console.error(result);
    }, error => console.error(error));
  }

  openModal(usuario: Usuario) {
    const modalRef = this.modalService.open(UserModalComponent);
    modalRef.componentInstance.usuario = usuario; 

    modalRef.result.then(result => {
      if (result === 'updated') {
        // Lógica para actualizar los datos en la tabla
      }
    });
  }


  title = 'angularapp';
}

interface Usuario {
  COD_USUARIO: number;
  TIP_DOCUMENTO: string;
  VAR_DOC_IDENTIDAD: string;
  VAR_APELLIDOS: string;
  VAR_PASSWORD: string;
  VAR_NUM_TELEFONO: string;
  INT_FLG_ELIMINADO: number;
  FEC_REGISTRO: Date;
  FEC_MODIFICACION: Date;
  isSelected: boolean;
}

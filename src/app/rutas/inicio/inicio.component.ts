import { Component } from '@angular/core'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  texto:string="";
  downloadFile(data:any) {
    const url = window.URL.createObjectURL(data);
    window.open(url);
  }

  enviarMensaje(){
    const mensaje = this.texto;
    this.texto  = "";
    window.location.href = `https://api.whatsapp.com/send?phone=593996296751&text=${mensaje}`;
    
  }


}


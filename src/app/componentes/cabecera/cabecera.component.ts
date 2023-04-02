import { Component } from '@angular/core';
import { path_bacilica } from 'src/app/constantes/PATHS_IMG';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent{
  path = path_bacilica;
}

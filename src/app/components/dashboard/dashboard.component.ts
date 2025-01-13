import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListaNotasComponent } from '../lista-notas/lista-notas.component';

@Component({
  selector: 'app-dashboard',
  imports: [ HeaderComponent, ListaNotasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

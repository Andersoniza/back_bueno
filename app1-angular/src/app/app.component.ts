import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1-angular';
  titulo: string="listar materias"

materia:any[]=[]
constructor(){
  this.Materia()
}

Materia(){
  //solicitando datos al proyecto de nest desde angular
  fetch('http://127.0.0.1:3000/materia')
  .then(Response=>Response.json())
  .then(json=>{
    this.materia=json
  })
 
}
}

import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private headerService: HeaderService){}

  name : string = "Bryan Montiel Gonzalez";
  vision : string = "que mi version de mañana supere a mi version del ayer";
  contacto1 : string = "bryanssj01@gmail.com";
  contacto2 : string = "272-247-6449";
  contacto3 : string="gitHub";
  direccion : string="Mariano Escobedo, Mariano Escobedo, Ver";
  foto : string = "https://firebasestorage.googleapis.com/v0/b/my-cv-8632f.appspot.com/o/Captura%20de%20pantalla%202023-08-29%20132753.png?alt=media&token=289cd63f-e335-4507-9e0a-9a35df56ea37";
  redsocial: string ="Instagram";

  ngOnInit(): void{
    this.headerService.getHeader()
    .subscribe( (data: any) => {
      console.log(data)
      //alert(data)
      this.name = data.name;
      this.vision = data.mision;
      this.foto = data.foto; 
      this.contacto1 = data.email; 
      this.contacto2 = data.celular;
      this.contacto3 = data.redsocial;
      this.direccion = data.ubicacion;
      this.redsocial = data.redsocial;
    });
  }     
}
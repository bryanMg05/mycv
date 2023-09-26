import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  work_experience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
          Fecha : "2018-2021",
          Ubicacion : "Orizaba, Ver",
          Puesto : "Empleado multiusos",
          Empresa : "Refaccionaria",
          Logros : [
            {Descripccion : "Reparación de equipo"},
            {Descripccion : "Atencion al cliente"},
          ]
    };
    let work2 = {
      Fecha : "2022-2023",
      Ubicacion : "Orizaba, Ver",
      Puesto : "Empleado multiusos",
      Empresa : "Fridaletas",
      Logros : [
        {Descripccion : "Atención al cliente"},
        {Descripccion : "Experiencia basica de barista"},
        {Descripccion : "Experiencia en acesor de ventas"},
      ]
    };

    this.work_experience.push(work1);
    this.work_experience.push(work2);

  }


}

import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  getMateria(){
    return [
      {
      MATERIA:"Matematicas",
      NUMERO_ALUMNOS:"250",
      TEMA:"Limites",
      HORAS_CLASE:"3 Horas",
      PROFESOR:"Ing.Pepe"
      },
      {
        MATERIA:"Lenguaje",
        NUMERO_ALUMNOS:"100",
        TEMA:"Dialecto",
        HORAS_CLASE:"1 Hora",
        PROFESOR:"Ing.Marco"
      },
      {
        MATERIA:"Quimica",
        NUMERO_ALUMNOS:"50",
        TEMA:"Acidos",
        HORAS_CLASE:"2 Horas",
        PROFESOR:"Ing. Adrian Yepez"
      },
      {
        MATERIA:"Economia",
        NUMERO_ALUMNOS:"210",
        TEMA:"Calculos",
        HORAS_CLASE:"1 Hora",
        PROFESOR:"Ing.Pepe"
      },
      {
        MATERIA:"Fundamentos",
        NUMERO_ALUMNOS:"210",
        TEMA:"Analisis",
        HORAS_CLASE:"3 horas",
        PROFESOR:"Ing.Paul diez"
      }
  ];
 
  }}

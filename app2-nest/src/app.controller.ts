import { Controller, Get, } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("/materia")
  funMateria(){
    let materia =this.appService.getMateria();
    return materia;
  }
}

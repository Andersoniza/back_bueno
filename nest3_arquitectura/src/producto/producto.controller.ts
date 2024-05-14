import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('producto')
@ApiTags('CRUD Productos')

export class ProductoController {

constructor(private productoService:ProductoService){}
@ApiOperation({summary:'obtener lista productos'})
@ApiResponse({status:200, description:'retorna lista de productos'})
@Get()
funListar(){
    let productos=this.productoService.findAll()
    return productos
}
@ApiOperation({summary:'crear nuevo producto'})
@ApiResponse({status:202, description:'registra nuevo producto'})
@Post()
funGuardar(@Body()prod:CreateProductoDto){
    let respuesta=this.productoService.create(prod);
    return respuesta
}
@ApiOperation({summary:'mostrar los productos'})
@ApiResponse({status:201, description:'retorna productos'})
@Get(":id")
funmostar(@Param("id")id){
    return "Mostrando.."+id;
}

@ApiOperation({summary:'modifica un producto'})
@ApiResponse({status:202, description:'muestra la modificacion'})
@Put(":id")
funmodificar(@Param("id")id,@Body()prod)
{return"modificando..."+id}

@ApiOperation({summary:'elimina un producto'})
@ApiResponse({status:201, description:'elimina un producto'})
@Delete(":id")
funeliminar(@Param("id")id)
{return"eliminado"+id }
}

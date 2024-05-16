import { IsNotEmpty } from "class-validator";
import { producto } from "../producto.interface";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductoDto implements producto{
    @IsNotEmpty()
    @ApiProperty()
    readonly nombre:string;
    @IsNotEmpty()
    readonly precio:number;
    @IsNotEmpty()
    readonly cantidad:number;
    @IsNotEmpty()
    readonly imagen:string;
    
    readonly descripcion:string;
}
import { PartialType } from "@nestjs/mapped-types";
import { LoginAuthDto } from "./login-auth.dto";
import { IsNotEmpty } from "class-validator";

export class RegisterAuthdto extends PartialType(LoginAuthDto){
    @IsNotEmpty()
    name:string;
}
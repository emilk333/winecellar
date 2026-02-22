import { Length, IsString } from "class-validator"

export class CreateWineDTO {
    @IsString()
    @Length(3, 100)  
    name: string

    @IsString()
    @Length(0, 100)
    description: string
}
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    ParseUUIDPipe,
    NotFoundException,
    ValidationPipe,
    UseGuards
} from '@nestjs/common';
import { CreateWineDTO } from './dto/create-wine.dto';
import { WineService } from './wine.service';
import type { UUID } from 'crypto'
import { WineGuard } from './wine.guard';

@Controller('wine')
export class WineController {
    constructor(private wineService: WineService) {}

    @Get()
    allWine() {
        return this.wineService.allWine();
    }

    @Get(':id')
    singleWine(@Param('id', ParseUUIDPipe) id: UUID) {
        try {
            return this.wineService.singleWine(id);    
        } catch (error) {
            throw new NotFoundException(error.message)   
        }
    }

    @Post()
    createWine(@Body() createWineDTO: CreateWineDTO) {
        return this.wineService.create(createWineDTO);
    }

    @Delete(':id')
    @UseGuards(WineGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    removeWine(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.wineService.remove(id);
    }
}

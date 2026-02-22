import { Module } from '@nestjs/common';
import { WineController } from './wine.controller';
import { WineService } from './wine.service';

@Module({
  controllers: [WineController],
  providers: [WineService]
})
export class WineModule {}

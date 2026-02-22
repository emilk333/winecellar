import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WineModule } from './wine/wine.module';

@Module({
  imports: [WineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

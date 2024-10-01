import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpaceModule } from './space/space.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';
import { ParkModule } from './park/park.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    SpaceModule,
    CarModule,
    ParkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

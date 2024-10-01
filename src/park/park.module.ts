import { Module } from '@nestjs/common';
import { ParkController } from './park.controller';
import { ParkService } from './park.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Space, SpaceSchema } from 'src/space/schemas/space.schema';
import { Car, CarSchema } from 'src/car/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Space.name, schema: SpaceSchema },
      { name: Car.name, schema: CarSchema }
    ])
  ],
  controllers: [ParkController],
  providers: [ParkService]
})
export class ParkModule {}

import { Injectable } from '@nestjs/common';
import CRUD from 'src/repository/services/crud';
import { Car } from './schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CarService extends CRUD<Car> {
    constructor(@InjectModel('Car') public model: Model<Car>) { 
      super();
    }
}
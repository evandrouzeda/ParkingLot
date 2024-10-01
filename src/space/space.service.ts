import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Space } from './schemas/space.schema';
import CRUD from 'src/repository/services/crud';

@Injectable()
export class SpaceService extends CRUD<Space> {
    constructor(@InjectModel('Space') public model: Model<Space>) { 
      super();
    }
}


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Model } from 'mongoose';
import { Car } from 'src/car/schema';
import { Space } from 'src/space/schemas/space.schema';

@Injectable()
export class ParkService {
    constructor(
        @InjectModel('Space') public spaceModel: Model<Space>,
        @InjectModel('Car') public carModel: Model<Car>
    ) { }

    async enterSpace(data: { spaceId: string, carId: string }) {
        await this.carModel.updateOne({_id: new ObjectId(data.carId)}, {space: new ObjectId(data.spaceId)})
        await this.spaceModel.updateOne({_id: new ObjectId(data.spaceId)}, {empty: false})
        return {status: "succes", message: "Car added to space"}
    }

    async leaveSpace(data: { spaceId: string, carId: string }) {
        await this.carModel.updateOne({_id: new ObjectId(data.carId)}, {space: ""})
        await this.spaceModel.updateOne({_id: new ObjectId(data.spaceId)}, {empty: true})
        return {status: "succes", message: "Car removed from space"}
    }
}

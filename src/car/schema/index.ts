// src/cars/schemas/car.schema.ts

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "bson";
import { HydratedDocument } from "mongoose";
import CarCommand from "../domain/command";

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
    @Prop()
    _id: ObjectId;

    @Prop()
    make: string;

    @Prop()
    model: string;

    @Prop()
    year: number;

    @Prop()
    space: ObjectId;

    @Prop({ default: false })
    isAvailable: boolean;

    toCommand(): CarCommand {
        return new CarCommand(this._id, this.make, this.model, this.year, this.isAvailable, this.space);
    }
}

export const CarSchema = SchemaFactory.createForClass(Car);

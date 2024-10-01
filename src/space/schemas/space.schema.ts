
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "bson";
import { HydratedDocument } from "mongoose";
import SpaceCommand from "../domain/command";

export type SpaceDocument = HydratedDocument<Space>;

@Schema()
export class Space {
    @Prop()
    _id: ObjectId;

    @Prop()
    name: string;

    @Prop()
    empty: boolean;

    toCommand(): SpaceCommand {
        return new SpaceCommand(this._id, this.name, this.empty);
    }
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
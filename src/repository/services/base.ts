import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export default abstract class ServiceRoot<T> {
    abstract model: Model<T>;
}
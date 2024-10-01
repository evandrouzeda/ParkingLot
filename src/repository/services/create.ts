import { ObjectId } from "bson";
import ServiceRoot from "./base";


export default abstract class Create<T> extends ServiceRoot<T> {
        async create(value: any): Promise<T> {
            value._id = new ObjectId();
            return await this.model.create(value);
        }
    }

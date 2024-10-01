
import { ObjectId } from "bson";
import ServiceRoot from "./base";

export default abstract class Read<T> extends ServiceRoot<T> {
    async readOne(id: string): Promise<T> {
        return await this.model.findById(new ObjectId(id));
    }

    async readMany() {
        return await this.model.find();
    }
}
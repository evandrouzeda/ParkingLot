
import { ObjectId } from "bson";
import ServiceRoot from "./base";

export default abstract class Update<T> extends ServiceRoot<T> {
    async update(id: string, data: any) {
        return await this.model.updateOne({ _id: new ObjectId(id) }, data);
    }
}
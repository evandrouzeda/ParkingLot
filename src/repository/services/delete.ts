import { ObjectId } from "bson";
import ServiceRoot from "./base";

export default abstract class Delete<T> extends ServiceRoot<T> {
    async delete(id: string) {
        return await this.model.deleteOne({ _id: new ObjectId(id)});
    }
}
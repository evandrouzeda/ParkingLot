import { ObjectId } from "bson";
import { CarService } from "../car.service";

export default class CarIntoSpaceUsecase {
    constructor(private persist: CarService) {}

    async execute(carId: string, spaceId: string) {
        //TODO: set car.space to spaceId and change space.empty to false
        return this.persist.update(carId, {space: new ObjectId(spaceId)});
    }
}
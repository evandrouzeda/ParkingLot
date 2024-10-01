import { CarService } from "src/car/car.service";
import { SpaceService } from "../space.service";

export default class CarEntryInSpaceUsecase {
    constructor(private spacePersist: SpaceService, private carPersist: CarService) { }
    execute(obj: { spaceId: string, carId: string }) {
        this.carPersist.update(obj.carId, { space: obj.spaceId });
        this.spacePersist.update(obj.spaceId, { empty: false })
        return {status: "success", message:"Car added to space"}
    }
}
import SpaceCommand from "../domain/command";
import { SpaceService } from "../space.service";

export default class NewSpaceUsecase {
    constructor(private service: SpaceService) { }
    execute(command: SpaceCommand) {
        return this.service.create(command);
    }
}
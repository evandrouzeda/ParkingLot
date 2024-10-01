import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SpaceService } from './space.service';
import { Space } from './schemas/space.schema';
import SpaceCommand from './domain/command';
import NewSpaceUsecase from './usecases/newSpace';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Space')
@Controller('space')
export class SpaceController {
    constructor(private spaceService : SpaceService) {}
    @Get()
    getSpace() {
        return this.spaceService.readMany();
    }

    @Get(':id')
    getSpaceById(@Param('id') id: string){
        console.log(id);
        return this.spaceService.readOne(id);
    }

    @Put(':id')
    updateSpaceById(@Param('id') id: string, @Body() update: any) {
        console.log(id);
        console.log(update);
        return this.spaceService.update(id, update);
    }

    @Post()
    createSpace(@Body() body: Space){
        console.log(body);
        const command = new SpaceCommand(body._id, body.name, body.empty);;
        console.log(command);
        // TODO: call usecase
        return new NewSpaceUsecase(this.spaceService).execute(command);
    }

    @Delete(':id')
    deleteSpaceById(@Param('id') id: string){
        return this.spaceService.delete(id);
    }
}

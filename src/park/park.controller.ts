import { Body, Controller, Delete, Param, Put } from '@nestjs/common';
import { ParkService } from './park.service';
import CarEntryInSpaceUsecase from 'src/space/usecases/carEntryinSpace';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Park')
@Controller('park')
export class ParkController {
    constructor(private readonly parkService: ParkService) {}

    @Put(':id')
    enterspace(@Param('id') id: string, @Body() data: any) {
        if(!data.carId) return {status: "error", message: "missing car id"};
        return this.parkService.enterSpace({carId: data.carId, spaceId: id});
    }

    @Delete(':id')
    leavespace(@Param('id') id: string, @Body() data: any) {
        if(!data.carId) return {status: "error", message: "missing car id"};
        return this.parkService.leaveSpace({carId: data.carId, spaceId: id});
    }
}

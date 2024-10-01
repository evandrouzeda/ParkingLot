import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './schema';
import CarCommand from './domain/command';
import CarIntoSpaceUsecase from './usecases/carIntoSpace';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Car')
@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get()
    getCars(){
        return this.carService.readMany();
    }

    @Get(':id')
    getCarById(@Param('id') id: string): Promise<Car> {
        return this.carService.readOne(id);
    }


    @Post()
    createCar(@Body() body: Car) {
        console.log(body);
        const command = new CarCommand(body._id, body.make, body.model, body.year, body.isAvailable, "")
        return this.carService.create(command);
    }

    @Put(':id')
    updateCar(@Param('id') id: string, @Body() body: any) {
        return this.carService.update(id, body);
    }

    @Delete(':id')
    deleteCar(@Param('id') id: string): Promise<any> {
        return this.carService.delete(id);
    }
}

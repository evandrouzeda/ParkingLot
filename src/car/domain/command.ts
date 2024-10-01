export default class CarCommand {
    constructor(
      readonly _id: any,
      readonly make: string,
      readonly model: string,
      readonly year: number,
      readonly isAvailable: boolean,
      readonly space: any
    ) {}
  }
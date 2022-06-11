module.import = {
    Vehicle
} from './vehicle.js';

//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends class Vehicle{
    constructor(make, model, year, color, mileage) {

   
    super(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService)
}
}
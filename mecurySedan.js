module.import = {
    Vehicle
} from './vehicle.js';

//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends class VehicleModule{
    constructor(make, model, year, color, mileage) {

   
    super(make, model, year, color, mileage);
    this.maximumPassengers = '5';
    this.passenger = '0';
    this.numberOfWheels = '4';
    this.maximumSpeed = '160';
    this.fuel = '10';
    this.scheduleService = 'false';
    
}
loadPassenger (num) {
    (if this.passenger < this.maximumPassengers) {  //leaving off here for the moment....

    }
}
}
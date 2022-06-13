module.import = {
    Vehicle
} 

//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends class VehicleModule{
    constructor(make, model, year, color, mileage) {

   
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
    
}

// loadPassenger

loadPassenger (num) {
    if (this.passenger < this.maximumPassengers) {  
        if ((num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            return this.passenger;
        }
        else {
console.log (this.model = ` ${this.make} Does not have enough room.`);
        }
    }
    else {
            console.log(this.model + " " + this.make + " Too full.");
        }

    }


    start () {
        if (this.fuel > 0) {  
            console.log ('Engine Started.');
            return this.started = true
            }

            else {
                return this.started = false;
    console.log ('Not Enough Fuel to Start.');
    
            }
    }

    scheduleService (mileage) {
        if (this.mileage > 30000){

            console.log ('Time for Maintenance!')
            return this.timeForMaintenance = true;
        }
        else {
            console.log ('Keep on Truckin!');
            return this.timeForMaintenance = false;
        }
    }
}
    
        {}       //I don't know why, but adding this bracket pair cleared up an error I was having...???

        let myTruck = new Truck('Rivian', 'R1T', '2024', 'black', 70000)

myTruck.start()
myTruck.loadPassenger(5)
myTruck.stop()
myTruck.checkService()

console.log(myTruck)

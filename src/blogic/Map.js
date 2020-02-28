import AllLocations from "./locationdata"
import Location from "./Location"

export default class Map {
    constructor(){
        // init empty array
        this.locationArray = [];
        this.currentLocation = "";
        for( var key in AllLocations){

            if (AllLocations.hasOwnProperty(key)){

                // construct location object
                let newLocation = new Location(AllLocations[key])

                // bind Entrance to newLocation
                if (newLocation.name == "Entrance"){
                    this.currentLocation = newLocation;
                }

                this.locationArray.push(newLocation);
            }
        }
    }

    getCurrentLocation(){
        console.log("The current location is " + this.currentLocation.name)
        return this.currentLocation;
    }

    getAllLocations(){
        return this.locationArray
    }

    move(direction){
        // find if there is neighbour
        let newLocationName = this.currentLocation.getNeighbourName(direction);
        
        // find the neighbour and set the current location to this location
        this.currentLocation = this.locationArray.find(
            function(element){
                return element.name == newLocationName;
            }
        );
    }
}
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
                if (newLocation.name === "Entrance"){
                    this.currentLocation = newLocation;
                }

                this.locationArray.push(newLocation);
            }
        }
    }

    getCurrentLocation(){
        return this.currentLocation;
    }

    getAllLocations(){
        return this.locationArray
    }

    /**
     * returns the Location after a directino is issued. prints this in console 
     * @param {input direction} direction 
     */
    move(direction){
        // find if there is neighbour
        try {
            let newLocationName = this.currentLocation.getNeighbourName(direction);

            // find the neighbour and set the current location to this location
            var findResult = this.locationArray.find(
                function(element){
                    return element.name === newLocationName;
                }
            );

            if (findResult === undefined ){
                throw("Location is undefined")
            }else{
                this.currentLocation = findResult
                console.log("User moves to this new location: " + this.currentLocation.name)
            }
        }
        catch (err) {
            console.log("User tries to move to a invalid location")
        }
    }

    /**
     * logs all accessible neighbours
     */
    getAccesiblelocations(){
        this.currentLocation.getAllNeighbours();
        return;
    }
}
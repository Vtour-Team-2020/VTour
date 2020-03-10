import Location from "./Location"

import mediaResource from "./mediamapping"
import AllLocations from "./ActualLocationData"

export default class Map {
    constructor(){
        // init empty array
        this.locationArray = [];
        this.entrancePic = mediaResource.entrance

        this.eventLists = mediaResource.eventLists
        
        // testMedResource = AllLocations

        var locations = AllLocations

        this.currentLocation = "";
        for( var key in locations ){
            if (locations.hasOwnProperty(key)){
                // construct location object
                let newLocation = new Location(locations[key], this.eventLists[key])

                if (newLocation.name === "Golden Gate" || newLocation.name === "HO"){
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
                return undefined;
            }else{
                this.currentLocation = findResult
                console.log("User moves to this new location: " + this.currentLocation.name)
            }
        }
        catch (err) {
            console.log("User tries to move to a invalid location")
        }
    }

    quickMove(locationName){
        // find in array if such location exists
        var findResult = this.locationArray.find(
            function(element){
                return element.name === locationName;
            }
        );
        this.currentLocation = findResult
        return;
    }

    hasLocation(locationName){
        var findResult = this.locationArray.find(
            function(element){
                return element.name === locationName;
            }
        );
        if (findResult === undefined ){
            return(false)
        }else{
            return(true)
        }
    }

    /**
     * logs all accessible neighbours
     */
    getLocationInfo(){
        return this.currentLocation.getLocationInfo();;
    }

    /**
     * 
     */
    getEntranceImage(){
        return this.entrancePic
    }

    /**
     * returns the transition gif's url when a user makes a location change, returns
     * undefined if the key is null 
     */
    getTransitionGif(direction){
        try{
            let gif_key = this.currentLocation.getGifKey(direction)
            
            let gif = mediaResource.transitiongifs[gif_key]
            return gif;
        } catch(err) {
            console.log(err)
        }
    }

    getCurrentLocationPics(){
        try{
            let pic_key = this.currentLocation.getLocationPics()
            
            let pic = mediaResource.locations[pic_key]
            return pic;
        } catch(err) {
            console.log(err)
        }
    }

    getCurrentLocationPicl(){
        try{
            let pic_key = this.currentLocation.getLocationPicl()
            
            let pic = mediaResource.locationl[pic_key]
            return pic;
        } catch(err) {
            console.log(err)
        }
    }    

    getCurrentLocationEvents(){
        if (this.currentLocation.getEventList() !== undefined){
            return this.currentLocation.getEventList();
        }else{
            return undefined;
        }
    }

    getCurrentLocationJuice(){
        return this.currentLocation.getJuice();
    }
}
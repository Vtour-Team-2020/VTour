import AllLocations from "./locationdata"
import Location from "./Location"

import Media from "./mediaResource"
import mediaResource from "./mediaResource";

export default class Map {
    constructor(){
        // init empty array
        this.locationArray = [];
        this.entrancePic = Media.entrance

        this.eventLists = mediaResource.eventLists
        console.log(this.eventLists)

        this.currentLocation = "";
        for( var key in AllLocations ){
            if (AllLocations.hasOwnProperty(key)){
                // construct location object
                let newLocation = new Location(AllLocations[key], this.eventLists[key])

                if (newLocation.name === "Golden Gate"){
                    this.currentLocation = newLocation;
                }
                this.locationArray.push(newLocation);

                console.log(newLocation)
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

        console.log("jump to" + findResult.name)
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

    getCurrentLocationPic(){
        try{
            let pic_key = this.currentLocation.getLocationPic()
            
            let pic = mediaResource.images[pic_key]
            return pic;
        } catch(err) {
            console.log(err)
        }
    }

    getCurrentLocationEvents(){
        console.log(this.currentLocation.getEventList())
        if (this.currentLocation.getEventList() !== undefined){
            return this.currentLocation.getEventList();
        }else{
            return undefined;
        }
    }
}
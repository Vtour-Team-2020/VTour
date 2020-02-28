import Location from "./Location"



class User {
    constructor(location){
        // initialise a start location for all users
        this.Currentlocation = new Location(location);
    }

    /**
     * Changes the user's current location base on input direction
     * @param {User input direction} direction 
     */
    changeLocation(direction){
        try {
            newLocation = this.Currentlocation.Move(direction);
            
            console.log("User now moves to" + newLocation.name)

            this.Currentlocation = newLocation
        } catch (err) {
            console.log("Not a valid location")
        }
    }

    getJuice(){ 
        console.log("get juice")
    }

    getPhotos(){
        console.log("get photos")
    }

    getVideos(){
        console.log("get videos")
    }
}
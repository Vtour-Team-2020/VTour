import Map from "./Map.js"

export default class User {
    constructor(){
        // initialise a start location for all users
        // this.Currentlocation = Map.getStartPoint();
        this.map = new Map()
    }

    /**
     * Changes the user's current location base on input direction
     * @param {User input direction} direction 
     */
    changeLocation(direction){
        console.log("direction input from user is " + direction)
        console.log(this.Currentlocation)
        try {
            let newLocation = this.Currentlocation.move(direction);
            
            console.log("User now moves to" + newLocation.name)

            this.Currentlocation = newLocation
        } catch (err) {
            // console.log(err)
        }
    }

    //
    getJuice(){ 
        return this.map.getCurrentLocation().getJuice();
    }

    getPhotos(){
        console.log("get photos")
    }

    getVideos(){
        console.log("get videos")
    }
}
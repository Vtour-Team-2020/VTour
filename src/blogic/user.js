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
        this.map.move(direction);
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
import LocationData from "./locationdata"

export default class Location {
    /**
     * 
     * @param {*} name 
     * @param {*} upNeighbour 
     * @param {*} downNeighbour 
     * @param {*} leftNeighbour 
     * @param {*} rightNeighbour 
     * @param {*} juice 
     * @param {*} photo 
     * @param {*} video 
     */
    constructor(locationJSON){
        this.name = locationJSON.name;

        // A location is aware of its four neighbours (for now)
        this.upNeighbour = locationJSON.upNeighbour;
        this.downNeighbour = locationJSON.downNeighbour;
        this.leftNeighbour = locationJSON.leftNeighbour;
        this.rightNeighbour = locationJSON.rightNeighbour;

        // Special attributes to the location
        this.juice = locationJSON.juice;
        this.photo = locationJSON.photo;
        this.video = locationJSON.video;
    }

    getNeighbourName(direction){
        switch(direction){
            case "up":
                return this.upNeighbour;
            case "down":
                return this.downNeighbour;
            case "left":
                return this.leftNeighbour;
            case "right":
                return this.rightNeighbour
            default:
                throw("error")
        }
    }

    getJuice(){
        return "getJuice";
    }
}
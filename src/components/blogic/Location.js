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
    constructor(locationJSON, Eventlist){
        this.name = locationJSON.name;

        // A location is aware of its four neighbours (for now)
        this.upNeighbour = locationJSON.upNeighbour;
        this.downNeighbour = locationJSON.downNeighbour;
        this.leftNeighbour = locationJSON.leftNeighbour;
        this.rightNeighbour = locationJSON.rightNeighbour;

        // A location is aware of the video to play
        this.upVideo = locationJSON.upVideo;
        this.downVideo = locationJSON.downVideo;
        this.leftVideo = locationJSON.leftVideo;
        this.rightVideo = locationJSON.rightVideo;

        // Special attributes to the location
        this.juice = locationJSON.juice;
        this.photo = locationJSON.photo;
        this.video = locationJSON.video;

        this.locationPics = locationJSON.locationPics;
        this.locationPicl = locationJSON.locationPicl;

        this.eventList = []
        this.eventList = Eventlist;

        this.visited = false;
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
                return undefined;
        }
    }

    getLocationInfo(){
        var LocationInfo = {
            name : this.name,
            upNeighbour : this.upNeighbour,
            downNeighbour : this.downNeighbour,
            leftNeighbour : this.leftNeighbour,
            rightNeighbour : this.rightNeighbour,

            juice : this.juice,
            visited : this.visited
        }

        this.visited = true;

        return LocationInfo
    }

    getJuice(){
        return this.juice;
    }

    getGifKey(direction){
        switch(direction){
            case "up":
                return this.upVideo;
            case "down":
                return this.downVideo;
            case "left":
                return this.leftVideo;
            case "right":
                return this.rightVideo
            default:
                return undefined;
        }        
    }

    getLocationPics(){
        return this.locationPics;
    }

    getLocationPicl(){
        return this.locationPicl;
    }

    getEventList(){
        return this.eventList
    }
}
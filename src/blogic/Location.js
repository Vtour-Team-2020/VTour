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

        // A location is aware of the video to play
        this.upVideo = locationJSON.upVideo;
        this.downVideo = locationJSON.downVideo;
        this.leftVideo = locationJSON.leftVideo;
        this.rightVideo = locationJSON.rightVideo;

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
                throw("Input is not captured, please check user input")
        }
    }

    getLocationInfo(){
        var LocationInfo = {
            upNeighbour : this.upNeighbour,
            downNeighbour : this.downNeighbour,
            leftNeighbour : this.leftNeighbour,
            rightNeighbour : this.rightNeighbour,

            juice : this.juice,
            photo : this.photo,
            video : this.video,
        }
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
                throw("Input is not captured, please check user input")
        }        
    }
}
class Location {
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
    constructor(name,upNeighbour,downNeighbour,leftNeighbour,rightNeighbour,
        juice,photo,video){
        this.name = name;

        // A location is aware of its four neighbours (for now)
        this.upNeighbour = upNeighbour;
        this.downNeighbour = downNeighbour;
        this.leftNeighbour = leftNeighbour;
        this.rightNeighbour = rightNeighbour;

        // Special attributes to the location
        this.juice = juice;
        this.photo = juice;
        this.video = juice;
    }

    /**
     * Returns boolean if a neighbour exists after executing a move
     * @param {*} direction 
     */
    canMove (direction) {
        switch(direction){
            case up:
                return this.upNeighbour !== undefined; //potential bug:!= vs !==, undefined vs null
            case down:
                return this.downNeighbour !== undefined;
            case left:
                return this.leftNeighbour !== undefined;
            case right:
                return this.rightNeighbour !== undefined;
            default:
                return "error, invalid direction";    
        }
    }

    /**
     * Returns boolean if a neighbour exists after executing a move
     * @param {*} direction 
     */
    move (direction) {
        switch(direction){
            case up:
                return this.upNeighbour 
            case down:
                return this.downNeighbour
            case left:
                return this.leftNeighbour 
            case right:
                return this.rightNeighbour 
            default:
                return "error, invalid direction";    
        }
    }
}

export default Location;
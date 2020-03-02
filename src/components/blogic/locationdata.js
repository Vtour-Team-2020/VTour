export default {
    "Entrance" : {
        "name":"Entrance",

        "upNeighbour": "Dance Studio",
        "downNeighbour":null,
        "leftNeighbour":"Gym Door",
        "rightNeighbour":null,

        "xpoint":0,
        "ypoint":0,

        "upVideo":"atob",
        "downVideo":null,
        "leftVideo":"atoc",
        "rightVideo":null,
        
        "juice":"this is where Eusoffians start their journey",
        "photo":{
            "photo1":{
                "photourl":null,
                "photocaption":""
            }
        }
    },

    "Dance Studio" : {
        "name": "Dance Studio",

        "upNeighbour":null,
        "downNeighbour":"Entrance",
        "leftNeighbour":null,
        "rightNeighbour":null,

        "upVideo":null,
        "downVideo":"btoa",
        "leftVideo":null,
        "rightVideo":null,
        
        "juice":"piu piu",
        "photo":"some photo",
        "video":"some video"
    },

    "Gym Door" : {
        "name":"Gym Door",

        "upNeighbour":"Gym",
        "downNeighbour":"Entrance",
        "leftNeighbour":null,
        "rightNeighbour":null,

        "upVideo":"ctod",
        "downVideo":null,
        "leftVideo":null,
        "rightVideo":null,
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"
    },

    "Gym" : {
        "name":"Gym",

        "upNeighbour":null,
        "downNeighbour":"Gym Door",
        "leftNeighbour":null,
        "rightNeighbour":null,

        "upVideo":null,
        "downVideo":"dtoc",
        "leftVideo":null,
        "rightVideo":null,
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"
    }
}
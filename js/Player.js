class Player{
    constructor(){
this.index = null;
this.x = 1200;
this.name = null;
this.y = null;
this.selection = null;
this.score = 0;
this.health = 2000;
    }
    getCount(){
       playerCountRef = database.ref("playerCount");
       playerCountRef.on("value",function(data){
           playerCount = data.val();
       }) 
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
    update(){
        var infoRef = "players/player" + this.index;
        database.ref(infoRef).set({
            "name" : this.name,
            "score" : this.score,
            "x" : this.x,
            "y" : this.y,
            "selection" : this.selection,
            "health" : this.health
        })
    }
    static getPlayerInfo(){
        playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data) => {
            allPlayers = data.val();
        })
    }
   
}
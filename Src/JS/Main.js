let playerList=null;
function main(){
     let player1=new Player(1,"Messi",1000);
     let player2=new Player(2,"Ronaldo",2000);
     playerList=new PlayerList();
     playerList.inputArray(player1);
     playerList.inputArray(player2);
     playerList.displayArray();
 }
 function createPlayer(){
    let id=document.getElementById("idplayer").value;
    let name=document.getElementById("nameplayer").value;
    let score=document.getElementById("scoreplayer").value;
    let player=new Player(id,name,score);
    playerList.inputArray(player);
    playerList.displayArray();
 }

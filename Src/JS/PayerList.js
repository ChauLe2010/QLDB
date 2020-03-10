let PlayerList=function(){
    let arrayPlayers=[];
    this.inputArray = function(player){
        arrayPlayers.push(player);
    }
    this.displayArray = function () {
        html="<table style='width:100%; border: 1px solid black'>";
        for(let i=0;i<arrayPlayers.length;i++){
            html+="<tr>";
            html+="<td>"+arrayPlayers[i].getId()+"</td>";
            html+="<td>"+arrayPlayers[i].getName()+"</td>";
            html+="<td>"+arrayPlayers[i].getScore()+"</td>";
            html+="</tr>";
        }
        html+="</table>";
        document.getElementById("display").innerHTML=html;
    }

}

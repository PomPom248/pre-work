// Rover Object Goes Here
// ======================
var rover ={
  direction:["N","S","E","W"],
  x:0,
  y:0,
  travelLog:[],
};
// ======================
function turnLeft(rover){
  var direction=["N","S","W","E"];
  //for (var i=0;i<direction[i].length;i++){
  switch(rover){
    case "N":
    direction=direction[3];
    break;
    case "S":
    direction=direction[2];
    break;
    case "W":
    direction=direction[1];
    break;
    case "E":
    direction=direction[0];
    break;

//}
}
console.log("The Rover is now facing "+direction);
//console.log("turnLeft was called")
}

function turnRight(rover){
  var direction=["N","S","W","E"];
  //for (var i=0;i<direction[i].length;i++){
  switch(rover){
      case "N":
      direction=direction[2];
      break;
      case "S":
      direction=direction[3];
      break;
      case "W":
      direction=direction[0];
      break;
      case "E":
      direction=direction[1];
      break;
  }
//}
console.log("The Rover is now facing "+direction);
//console.log(rover.direction);
}

function moveForward(rover){
  var direction=[];
  switch(rover){
    case "N":
    direction=[rover.x][rover.y++];
    break;
    case "S":
    direction=[rover.x][rover.y--];
    break;
    case "W":
    direction=[rover.x--][rover.y];
    break;
    case "E":
    direction= [rover.x++][rover.y];
    break;

  }
console.log("The Rover is forward moving towards the "+direction);``
console.log("moveForward was called");
}
 
var listsOfCommands=['r','f','f','r','f','f','l','f','r','f','f']; 

function commandsReceived(commandArray){
for (var i=0;i<commandArray.length;i++)
    if (commandArray[i]=='r') turnRight(rover);
    else if (commandArray[i]=='l') turnLeft(rover);
    else if (commandArray[i]=='f') moveForward(rover);
    }
  commandsReceived(listsOfCommands);

//BONUS - MOVING BACKWARDS
  function moveBackwards(rover){
    var direction=[];
    switch(rover){
      case "N":
      direction=[rover.x][rover.y--];
      break;
      case "S":
      direction=[rover.x][rover.y++];
      break;
      case "W":
      direction=[rover.x++][rover.y];
      break;
      case "E":
      direction= [rover.x--][rover.y];
      break;
  
    }
  console.log("The Rover is moving backwards towards the "+direction);``
  console.log("moveBackwards was called");
  }
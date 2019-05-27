// Rover Object Goes Here
// ======================
var rover = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog : [[0,0]]
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction=="N"){
	rover.direction = "W";
  }
  else if(rover.direction=="W"){
	rover.direction = "S";
  }
  else if(rover.direction=="S"){
	rover.direction = "E";
  }
  else{
	rover.direction = "N";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction=="N"){
	rover.direction = "E";
  }
  else if(rover.direction=="E"){
	rover.direction = "S";
  }
  else if(rover.direction=="S"){
	rover.direction = "W";
  }
  else{
	rover.direction = "N";
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  if(rover.direction=="N"){
	  if(rover.y==0){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.y -= 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
	  }
  }
  else if(rover.direction=="E"){
	  if(rover.x==9){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.x += 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
    }
  }
  else if(rover.direction=="S"){
	  if(rover.y==9){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.y += 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
    }
  }
  else{
	  if(rover.x==0){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.x -= 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
	  }
  }
}

function commands(str){
  var tam = str.length;
  var cond = true;
  for(i=0;i<tam;i++){
    if(str[i]=="r"||str[i]=="R"||str[i]=="l"||str[i]=="L"||str[i]=="f"||str[i]=="F"||str[i]=="b"||str[i]=="B"){
      
    }
    else{
      cond = false;
    }
  }
  if(cond!=false){
    for(i=0;i<tam;i++){
      if(str[i]=="r"||str[i]=="R"){
        turnRight(rover);
      }
      else if(str[i]=="l"||str[i]=="L"){
        turnLeft(rover);
      }
      else if(str[i]=="f"||str[i]=="F"){
        moveForward(rover);
      }
      else if(str[i]=="b"||str[i]=="B"){
        moveBackward(rover);
      }
    }
  }
  else{
    console.log("some inputs are invalidates");
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if(rover.direction=="N"){
	  if(rover.y==9){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.y += 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
	  }
  }
  else if(rover.direction=="E"){
	  if(rover.x==0){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.x -= 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
    }
  }
  else if(rover.direction=="S"){
	  if(rover.y==0){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.y -= 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
    }
  }
  else{
	  if(rover.x==9){
	    console.log("Not possible, will go out of the grid!!!");	
	  }
	  else{
	    rover.x += 1;
      rover.travelLog.push([rover.x,rover.y]);
      tracking();
	  }
  }
}

function tracking(){
  var tama = rover.travelLog.length;
  for(j=0;j<tama;j++){
    console.log(rover.travelLog[j]);
  }
}
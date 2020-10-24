

var width = 400;
var height = 400;
var clicks = 0;


$("#map").click(function(event)
{
  clicks++;

 //get distance between click event and target
  var distance = getDistance(event,target);
 //convert ditance to a hint
 var distanceHint = getDistanceHint(distance);

 //update the
 $("#distance").text(distanceHint);


 if(distance < 16) {
   alert("Fount the treasure in " + clicks +" clicks!");
 }

});

var getDistanceHint = function (distance){

if(distance < 10){
 return "Boiling Hot Zach!";
}else if(distance < 20){
 return "Really hot";
}else if(distance < 40){
   return "Hot";
}else if(distance < 80){
  return "Warm";
}else if(distance < 160){
  return "Cold";
}else if(distance <320){
  return "Really Cold";
}else{
  return "Freezing!";
}
};

//GetRandomNumber from 0 to size
var getRandomNumber = function(size)
{
  return  Math.floor(Math.random()*size);
};
//Calculate distance between click event and target
var getDistance = function(event,target)
{
 var diffX = event.offsetX - target.x;
 var diffY = event.offsetY - target.y;
 return Math.sqrt((diffX*diffX)+(diffY*diffY));
};

var target = {
x: getRandomNumber(width),
y: getRandomNumber(height)
};
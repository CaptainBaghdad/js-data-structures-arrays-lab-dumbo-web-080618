// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  
  drivers.unshift(name);
}

function  destructivelyRemoveLastDriver(){
  let ans = drivers.pop();
  return ans;
}

function destructivelyRemoveFirstDriver(){
  let ans  = drivers.shift();
  return ans;
  
}

function appendDriver(name){
  
  return [...drivers,name];
  
}

 function prependDriver(name){ 
   return [name, ...drivers];
   
 }
 
 function removeLastDriver(){
   return drivers.slice(0,-1);
 }

function removeFirstDriver(){
  
}






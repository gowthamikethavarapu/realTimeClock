function displayTime(){
  setInterval(function(){ 
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var tdate = d.toLocaleDateString();
  
  h=("0"+h).slice(-2);
   m=("0"+m).slice(-2);
   s=("0"+ s).slice(-2);
   document.getElementById("display1").innerHTML = tdate;
  document.getElementById("display2").innerHTML = h+":"+m+":"+s;
  }, 1000);
}
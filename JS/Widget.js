function requestXYZ(){
    window.addEventListener("deviceorientation", function(event)
        {
            var x = Math.round(event.gamma);
            var y = Math.round(event.beta);
            var z = Math.round(event.alpha);
            if(x >= 20){
                document.getElementById('pano').style.left = (10*z)-3600+"px";//All panos need a constant to prevent the jumping effect when viewing panos.
            }else if(x <= -20){
                document.getElementById('pano').style.left = 10*(z+180)-7200+"px";
            
            }
        }, true);
    
}
//hmmm a global array for now...
var places = [12,11,10,7,5,3,1,0];
var i = 0;
function demo(){
    //tmp function
    alert();
    if(places[i] != 0){
    document.getElementById('pano').src = "Panos/"+places[i]+".jpg";
    i++;
    }else{
        alert("You have arrived!");
    }
}

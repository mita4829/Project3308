function requestXYZ(){
    window.addEventListener("deviceorientation", function(event)
        {
            var x = Math.round(event.gamma);
            var y = Math.round(event.beta);
            var z = Math.round(event.alpha);
            if(x >= 20){
                document.getElementById('pano').style.left = (-3600+10*z)+"px";//All panos need a constant to prevent the jumping effect when viewing panos.
                document.getElementById('debugPos').innerHTML = (-3600+10*z)+" "+z;
            }else if(x <= -20){
                document.getElementById('pano').style.left = 10*(z+180)-1800+"px";
            
            }
        }, true);
    
}

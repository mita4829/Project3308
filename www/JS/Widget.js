function requestXYZ(){
    var batterySaver = false;
    window.addEventListener("deviceorientation", function(event)
                            {
                            var x = Math.round(event.gamma);
                            var y = Math.round(event.beta);
                            var z = Math.round(event.alpha);
                            
                            if(x >= 20){
                            document.getElementById('pano').style.top = -18*z+"px";//All panos need a constant to prevent the jumping effect when viewing panos.
                            }else if(x <= -20){
                            document.getElementById('pano').style.top = -18*(z+180)+"px";
                            }
                            }, true);
    
}


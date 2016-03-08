function onload(){
    var isiPhone = checkIfiPhone();
    requestXYZ(isiPhone)
}
//Android phones' gyroscope behaves poorly as opposed to iPhones
function checkIfiPhone(){
    var android = (/Android/i.test(navigator.userAgent));
    if(!android){
        //assuming most people have iPhones or other phones but android
        return true;
    }else{
        return false;
    }
}
function requestXYZ(isiPhone){
    if(isiPhone){
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

    }else{//TODO: fix android bug where panos flip 180 deg
    window.addEventListener("deviceorientation", function(event)
        {
            var x = Math.round(event.gamma);
            var y = Math.round(event.beta);
            var z = Math.round(event.alpha);
            if(x >= 0){
                document.getElementById('pano').style.left = (-z*28)-2100+"px";//All panos need a constant to prevent the jumping effect when viewing panos.
                document.getElementById('debugPos').innerHTML = document.getElementById('pano').style.left+" "+x+" "+y+" "+z;
            }else{//when x turns negative, z gets flipped 180 degs for some reason
                document.getElementById('pano').style.left = 28*(-z)+"px";
                document.getElementById('debugPos').innerHTML = document.getElementById('pano').style.left+" "+x+" "+y+" "+z;

            }
        }, true);
    }
}


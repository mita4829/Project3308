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
    //iPhone complete
    if(isiPhone){
        window.addEventListener("deviceorientation", function(event)
            {
            var x = Math.round(event.gamma);
            var y = Math.round(event.beta);
            var z = Math.round(event.alpha);
            if(x >= 20){
                document.getElementById('pano').style.left = (7*z)-3600+"px";//All panos need a constant to prevent the jumping effect when viewing panos.
                //document.getElementById('debugPos').innerHTML = z;
            }else if(x <= -20){
                document.getElementById('pano').style.left = 7*(z+180)-3600+"px";
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
function getGeoLocation(){
    if(navigator.geolocation){
        //true if devices supports geoloc
        navigator.geolocation.watchPosition(showPosition);
        
    }else{
        alert("It looks like your device does not support location services.");
    }
}

function showPosition(position){
    //function to get users' location lat long and alt and return it back as an array.
    var latitude_longitude_altitude = [position.coords.latitude,position.coords.longitude,position.coords.altitude];
    //...might have to hardcode the lat&long to map locations...
    document.getElementById('locationBar').value = "Current Location";
    document.getElementById('locationBar').style.color = "rgba(16,63,251,1)";
    
    setPanotoCurrentLocation(latitude_longitude_altitude[0],latitude_longitude_altitude[1],latitude_longitude_altitude[2]);
    return;
}

function setPanotoCurrentLocation(latitude,longitude,altitude){
    var bitWiseLat = latitude | 0;var bitWiseLong = longitude | 0;
    if(bitWiseLat == 40 && bitWiseLong == -105){
        latitude = latitude.toString().substring(6,10);
        longitude = longitude.toString().substring(8,12);
        //altitude = altitude.toString();
        alert(latitude+" "+longitude);
        //10
        if(latitude <= 8595 && latitude >= 8590 && longitude <= 5243 && longitude >= 5238){
            document.getElementById('pano').src = "Panos/10.jpg";
        }//6
        else if(latitude <= 8510 && latitude >= 8504 && longitude <= 5284 && longitude >= 5278){
            document.getElementById('pano').src = "Panos/19.jpg";
        }
    }else{
        alert("Location services cannot work if you're not inside Norlin while using.")
    }
}

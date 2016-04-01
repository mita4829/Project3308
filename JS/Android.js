function onload(){
    var isiPhone = checkIfiPhone();
    requestXYZ(isiPhone);
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
function checkIfMobile(){
    var mobile = (/Android|webOS|iPhone|iPad|iPod|Windows Phone|Kindle|IEMobile/i.test(navigator.userAgent)); //return boolean: Check to see if it's a mobile device, if false, disable site.
    return mobile;
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
                document.getElementById('debugPos').innerHTML = z;
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
            if(1){
                document.getElementById('pano').style.left = (10*z)-3060+"px";//All panos need a constant to prevent the jumping effect when viewing panos.
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
    
    setPanotoCurrentLocation(latitude_longitude_altitude[0],latitude_longitude_altitude[1],latitude_longitude_altitude[2]);
    return;
}

function setPanotoCurrentLocation(latitude,longitude,altitude){
    var bitWiseLat = latitude | 0;var bitWiseLong = longitude | 0;
    if(bitWiseLat == 40 && bitWiseLong == -105){
        latitude = latitude.toString();
        longitude = longitude.toString();
        //altitude = altitude.toString();
        
        //10
        if(latitude <= 40.008994 && latitude >= 40.00841161 && longitude <= -105.2701053 && longitude >= -105.27079412){
            document.getElementById('pano').src = "Panos/10.jpg";
            return;
        }//6
        else if(latitude <= 8510 && latitude >= 8504 && longitude <= 5284 && longitude >= 5278){
            document.getElementById('pano').src = "Panos/19.jpg";
            return;
        }
        //alert(latitude+" "+longitude);
        document.getElementById('locationBar').value = "Current Location";
        document.getElementById('locationBar').style.color = "rgba(16,63,251,1)";
    }else{
        alert("Location services cannot work if you're not inside Norlin while using.");
        return;
    }
}
function setDeviceUserAgent(){
    var mobile = checkIfMobile();
    if(mobile){
        document.getElementById('notMobile').style.display = 'none';
    }else{
        document.getElementById('userFormToSearchBooks').style.display = 'none';
        document.getElementById('notLandscape').style.display = 'none';
        document.getElementById('locationServices').style.display = 'none';
    }
}
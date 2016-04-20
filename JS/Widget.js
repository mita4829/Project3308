function onload(){
    requestXYZ();//turn on pano if not android
    var data = checkPHPCall();//find out if database gave back values
    beginDataParse(data);
}

function checkIfiPhone(){
    var android = (/Android/i.test(navigator.userAgent));
    if(!android){
        return true;
    }else{
        return false;
    }
}


function checkIfMobile(){
    var mobile = (/Android|webOS|iPhone|iPad|iPod|Windows Phone|Kindle|IEMobile/i.test(navigator.userAgent));
    return mobile;
}


function requestXYZ(isiPhone){
    if(true){
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
    }
}

function checkPHPCall(){
    try{
        endlocation;
        start;
        return true;
    }catch(err){
        return false;//endlocation does not exist which means first visit to site or book not found in db
    }
}

function searchForBook(location,title){
    var startingLocation = location;
    var bookTitle = title;
    if(startingLocation == ""){
        //if values are missing
        alert("Starting location not given.");
        return;
    }else if(bookTitle == ""){
        alert("No book title given.");
        return;
    }
    window.location.href = "append.php?w1=" + bookTitle + "&w2=" + startingLocation;//query the database with
    
}

function beginDataParse(data){
    if(data){
        path = n.dijkstra(start.toString(),endlocation.toString());
        alert(endlocation);
        document.write(path);
        document.getElementById('pano').src = "PanoArrows/"+path[0]+"_"+path[1]+".jpg";//Beta 1.0 before arrows
    }
}

function getNextImage(){
    //beta 1.0
    if(inc < path.length){
        document.getElementById('pano').src = "PanoArrows/"+path[inc]+".jpg";
        inc = inc + 1;
    }else{
        alert("You have arrived!");
    }
}

function getPrevious(){
    if(inc >= 1){
        document.getElementById('pano').src = "PanoArrows/"+path[inc-1]+"_"+path[inc]+".jpg";
        inc = inc - 1;
    }else{
        alert("You have arrived back at you're starting location!");
    }
}

function getNext(){
    if(inc+1 < path.length-1){
        document.getElementById('pano').src = "PanoArrows/"+path[inc+1]+"_"+path[inc+2]+".jpg";
        inc = inc + 1;
    }else{
        alert("You have arrived");
    }
}


function getGeoLocation(){
    alert("Norlin Walk would like to use your current location as your starting location. This will only work if you're inside Norlin while using the app.");
    if(navigator.geolocation){
        //true if devices supports geoloc
        navigator.geolocation.watchPosition(showPosition);
        
    }else{
        alert("It looks like your device does not support location services.");
    }
}


function showPosition(position){
    //function to get users' location lat long and alt and return it back as an array.
    var latitude_longitude = [position.coords.latitude,position.coords.longitude];
    
setPanotoCurrentLocation(latitude_longitude[0],latitude_longitude[1]);
    return;
}

function setPanotoCurrentLocation(latitude,longitude){
    var bitWiseLat = latitude | 0;var bitWiseLong = longitude | 0;
    if(bitWiseLat == 40 && bitWiseLong == -105){
        latitude = latitude.toString();
        longitude = longitude.toString();
        
        
        document.getElementById('locationBar').value = "Current Location";
        document.getElementById('locationBar').style.color = "rgba(16,163,271,1)";
    }else{
        return;
    }
}

function setDeviceUserAgent(){
    var mobile = checkIfMobile();
    if(!mobile){
        document.getElementById('userFormToSearchBooks').style.display = 'none';
        document.getElementById('notLandscape').style.display = 'none';
        document.getElementById('locationServices').style.display = 'none';
        document.getElementById('pano').style.display = 'none';
        document.getElementById('userFormToSearchBooks').style.display = 'none';
    }
}

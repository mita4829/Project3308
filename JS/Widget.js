function onload(){
    var isiPhone = checkIfiPhone();
    requestXYZ(isiPhone);//turn on pano if not android
    
    var data = checkPHPCall();//find out if database gave back values
    beginDataParse(data);
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
    var startingLocation = location;//work here giving better start locations
    var bookTitle = title;
    if(startingLocation == ""){//if values are missing
        alert("Starting location not given.");
        return;
    }else if(bookTitle == ""){
        alert("No book title given.");
        return;
    }
    //might need to sanitize input
    window.location.href = "append.php?w1=" + bookTitle + "&w2=" + startingLocation;//query the database with
    
}

function beginDataParse(data){
    if(data){
        path = n.dijkstra(start.toString(),endlocation.toString());
	document.getElementById('pano').src = "Panos/"+path[0]+".jpg";
    }
}

function getNextImage(){
    if(inc < path.length){
        document.getElementById('pano').src = "Panos/"+path[inc]+".jpg";
        inc = inc + 1;
    }else{
        alert("You have arrived!");
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
    if(mobile){
        document.getElementById('notMobile').style.display = 'none';
    }else{
        document.getElementById('userFormToSearchBooks').style.display = 'none';
        document.getElementById('notLandscape').style.display = 'none';
        document.getElementById('locationServices').style.display = 'none';
    }
}

//Main javascript for home page
function onload(){ //website calls this function when the website first loads up
    setDeviceUserAgent();
}

//firstEvents and secondEvents functions are here just to keep things organized. Use them if you like, or use it to call other functions you've made
function firstEvents(){ //website runs this function after a certain point after the page loads
    
}

function secondEvents(){
    
}

function lastEvents(){
    
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
    return;
}

function searchForBook(userInput){ /* userInput is the name of the book the user is searching for. */
    /* Add more code here to connect with the SQL server to get the location of the book */
    alert(userInput);
}

function checkIfMobile(){
    var mobile = (/Android|webOS|iPhone|iPad|iPod|Windows Phone|Kindle|IEMobile/i.test(navigator.userAgent)); //return boolean: Check to see if it's a mobile device, if false, disable site.
    return mobile;
}

function setCookies(){/*Function to save info into a cookie so transferring web pages preserves users' information  */
    document.cookie = "UserName=Cookie Monster; expires=Tues, 1 Mar 2017 12:00:00 UTC; path=/";
    alert(document.cookie);    
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
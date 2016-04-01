//Main javascript for home page
function onload(){ //website calls this function when the website first loads up
    var isiPhone = checkIfiPhone();
    setDeviceUserAgent();
    requestXYZ(isiPhone);//turn on pano if not android
    
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

function requestXYZ(isiPhone){
    //iPhone complete
    if(isiPhone){
        window.addEventListener("deviceorientation", function(event){
            var x = Math.round(event.gamma);
            var y = Math.round(event.beta);
            var z = Math.round(event.alpha);
            if(x >= 20){
                document.getElementById('pano').style.left = (7.5*z)-3600+"px";
                document.getElementById('blur').style.left = (7.5*z)-3600+"px";//All panos need a constant to prevent the jumping effect when viewing
                                document.getElementById('debugPos').innerHTML = z;
            }else if(x <= -20){
                document.getElementById('pano').style.left = 7.5*(z+180)-3600+"px";
                document.getElementById('blur').style.left = 7.5*(z+180)-3600+"px";
            }
        }, true);
    }
}

function checkIfMobile(){
    var mobile = (/Mac|Android|webOS|iPhone|iPad|iPod|Windows Phone|Kindle|IEMobile/i.test(navigator.userAgent)); //return boolean: Check to see if it's a mobile device, if false, disable site.
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
        document.getElementById('pano').style.display = 'none';
        document.getElementById('userFormToSearchBooks').style.display = 'none';
    }
}

function checkIfiPhone(){
    var android = (/Android/i.test(navigator.userAgent));
    if(!android){
        //assuming most people have iPhones or other phones but android
        
        return true;
    }else{
        return false;
    }
}

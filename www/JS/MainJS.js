//Main javascript for home page
function onload(){ //website calls this function when the website first loads up
    checkIfMobile();
}

//firstEvents and secondEvents functions are here just to keep things organized. Use them if you like, or use it to call other functions you've made
function firstEvents(){ //website runs this function after a certain point after the page loads
    
}

function secondEvents(){
    
}

function lastEvents(){
    
}

function searchForBook(userInput){ /* userInput is the name of the book the user is searching for. */
    /* Add more code here to connect with the SQL server to get the location of the book */
    alert(userInput);
}

function checkIfMobile(){
    var mobile = (/Android|webOS|iPhone|iPad|iPod|Windows Phone|Kindle|IEMobile/i.test(navigator.userAgent)); //return boolean: Check to see if it's a mobile device, if false, disable site.
    if(!mobile){
        document.getElementById('userFormToSearchBooks').style.display = 'none';
    }
}
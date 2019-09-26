// handle html inject setup
const parentDiv = document.getElementById("lga");
var injection = document.createElement("div");
injection.className = "quote";
injection.innerHTML = "Sorry, no quote could be retrieved...";
parentDiv.appendChild(injection);

// shift search form down
var search = document.getElementById("searchform");

// send quote request to REST API
const URL = "https://quotes.rest/qod";
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
       var parsed = JSON.parse(this.responseText);
       injection.innerHTML = parsed.contents.quotes[0].quote;
    } 
}
request.open("GET", URL, true);
request.send();
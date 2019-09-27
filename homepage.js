// handle html inject setup
const parentDiv = document.getElementById("lga");
var injection = document.createElement("div");
injection.className = "quote";
injection.innerHTML = "Sorry, no quote could be retrieved...";
parentDiv.appendChild(injection);
var author = document.createElement("div");
author.className = "author";
parentDiv.appendChild(author);

// shift search form down
var search = document.getElementById("searchform");

// send quote request to REST API
const URL = "https://quotes.rest/qod.json";
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
       var parsed = JSON.parse(this.responseText);
       console.log(parsed);
       injection.innerHTML = parsed.contents.quotes[0].quote;
       author.innerHTML = parsed.contents.quotes[0].author;
    } 
}
request.open("GET", URL, true);
request.send();
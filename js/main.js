$(document).ready(function(){

  // Variables
  var facts = document.querySelector("#facts");
  var selected1 = document.querySelector("#chuck-fact");

  // Random get fact request
  $.getJSON("https://api.chucknorris.io/jokes/random?category=dev", function(json){
   facts.textContent = json.value; 
  });

  // Get fact by category request
  document.querySelector("#show-fact").onclick = function(){
    facts.textContent = "";
    var val = selected1.value; // value of dropdown
    var url = "https://api.chucknorris.io/jokes/random?category="; // API url
    var urlCat = url.concat(val); // API url plus category value
    $.getJSON(urlCat, function(json){
     facts.textContent = json.value;
    });
  }

});

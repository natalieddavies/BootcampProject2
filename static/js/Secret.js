// Use this link to get the geojson data.
var link = "/../../both_secret_data.json";

// Grabbing data with d3...
d3.json(link, function(data) {
//  for (var i = 0; i < data.length; i++) {
    console.log(5);
  }
);

function Both()
{
    var myarray= secretdata;
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("quoteDisplayBoth").innerHTML=random;
}


function Cats()
{
    var myarray= secretdata;
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("quoteDisplayCats").innerHTML=random;
}

function Dogs()
{
    var myarray= secretdata;
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("quoteDisplayDogs").innerHTML=random;
}



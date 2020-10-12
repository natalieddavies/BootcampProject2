// Function to determine cat marker size based number of people who like cats
function markerSize (marker) {
  return marker;
}

// LIKEEEEEEEEEEEEES BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTH
// Read in data from API 'likes both'
url = "/both"
d3.json(url).then(function(likesBoth) {
  var likesBothMarkers = [];
// Loop through locations and city markers
    for (var i = 0; i < likesBoth.length; i++) {
  // Setting the marker radius for the both by passing count for likes both into the markerSize function
      likesBothMarkers.push(
        L.circle([likesBoth[i].lat,likesBoth[i].lng], {
          stroke: false,
          fillOpacity: 0.75,
          color: "seagreen",
          fillColor: "seagreen",
          radius: markerSize(likesBoth[i].count),
    }));
  };
//////////////////heres your long green line //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CATSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS //
// Read in data from API 'likes both'
url = "/cats"
d3.json(url).then(function(likesCats) {
  var likesCatsMarkers = [];
console.log([likesCats[0].lat,likesCats[0].lng]);
// Loop through locations and city markers
    for (var i = 0; i < likesCats.length; i++) {
  // Setting the marker radius for the both by passing count for likes both into the markerSize function
      likesCatsMarkers.push(
        L.circle([likesCats[i].lat,likesCats[i].lng], {
          stroke: false,
          fillOpacity: 0.75,
          color: "coral",
          fillColor: "coral",
          radius: markerSize(likesCats[i].count),
    }));
  };
//////////////////heres your long green line //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// DOGSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS //
// Read in data from API 'likes both'
url = "/dogs"
d3.json(url).then(function(likesDogs) {
  var likesDogsMarkers = [];
// Loop through locations and city markers
    for (var i = 0; i < likesDogs.length; i++) {
  // Setting the marker radius for the both by passing count for likes both into the markerSize function
    likesDogsMarkers.push(
        L.circle([likesDogs[i].lat,likesDogs[i].lng], {
          stroke: false,
          fillOpacity: 0.75,
          color: "blue",
          fillColor: "blue",
          radius: markerSize(likesDogs[i].count),
    }));
  };
//////////////////heres your long green line //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Define a map object
  // Streetmap Layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});


var both = L.layerGroup(likesBothMarkers);
var cats = L.layerGroup(likesCatsMarkers);
var dogs = L.layerGroup(likesDogsMarkers);
var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 8,
  layers: [streetmap, both, cats, dogs]
});


// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

  var overlayMaps = {
    "Likes Both": both,
    "Likes Cats": cats,
    "Likes Dogs": dogs
  };

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
});
});
});
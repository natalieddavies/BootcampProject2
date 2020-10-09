



// Function to determine cat marker size based number of people who like cats
function markerSize (marker) {
  return marker;
}


// Read in data from API
url = 
d3.json(url).then(function(response) {
  console.log(response);
});

likesCats = response.likes_cats
likesDogs = response.likes_dogs
likesBoth = response.likes_both

// Define arrays to hold created markers
var likesDogsMarkers = [];
var likesCatsMarkers = [];
var likesBothmarkers = [];

// Loop through locations and city markers
for (var i = 0; i < likes_dogs.length; i++) {
  // Setting the marker radius for the dog markers by passing population into the markerSize function
  likesDogsMarkers.push(
    L.circle([likesDogs[i].Lat,likesDogs[i].Lng], {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(likesDogs[i].count)
    })
  );
};

// Loop through locations and city markers
for (var i = 0; i < likesCats.length; i++) {
  // Setting the marker radius for the cat markers by passing count for likes cats into the markerSize function
  likesCatsMarkers.push(
    L.circle([likesCats[i].Lat,likesCats[i].Lng], {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize(likes_cats[i].count)
    })
  );
};

// Loop through locations and city markers
for (var i = 0; i < likes_both.length; i++) {
  // Setting the marker radius for the both by passing count for likes both into the markerSize function
  likesBothMarkers.push(
    L.circle([likesBoth[i].Lat,likesBoth[i].Lng], {
      stroke: false,
      fillOpacity: 0.75,
      color: "green",
      fillColor: "green",
      radius: markerSize(likesBoth[i].count)
    })
  );
};

// Create base layers

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

// Create two separate layer groups: one for cities and one for states
var cats = L.layerGroup(likesCatsMarkers);
var dogs = L.layerGroup(likesDogsMarkers);
var both = L.layerGroup(likesBothmarkers);


// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Likes Dogs": dogs,
  "Likes Cats": cats,
  "Likes Both": both
};

// Define a map object
var myMap = L.map("map", {
  center: [36.7783, -119.4179],
  zoom: 5,
  layers: [streetmap, cats, dogs, both]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

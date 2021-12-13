// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
  changing: new L.LayerGroup(),
  chevron: new L.LayerGroup(),
  cigar: new L.LayerGroup(),
  cone: new L.LayerGroup(),
  cross: new L.LayerGroup(),
  cylinder: new L.LayerGroup(),
  diamond: new L.LayerGroup(),
  disk: new L.LayerGroup(),
  egg: new L.LayerGroup(),
  fireball: new L.LayerGroup(),
  flash: new L.LayerGroup(),
  formation: new L.LayerGroup(),
  light: new L.LayerGroup(),
  other: new L.LayerGroup(),
  oval: new L.LayerGroup(),
  rectangle: new L.LayerGroup(),
  sphere: new L.LayerGroup(),
  teardrop: new L.LayerGroup(),
  triangle: new L.LayerGroup(),
  circle: new L.LayerGroup(),
  unknown: new L.LayerGroup()
};
map_lat=35.09;
map_long=-96.71;
map_zoom=5;

// Create the map with our layers
var map = L.map("map-id", {
  center: [map_lat, map_long],
  zoom: map_zoom,
  layers: [
    layers.changing,
    layers.chevron,
    layers.cigar,
    layers.cone,
    layers.cross,
    layers.cylinder,
    layers.diamond,
    layers.disk,
    layers.egg,
    layers.fireball,
    layers.flash,
    layers.formation,
    layers.light,
    layers.other,
    layers.oval,
    layers.rectangle,
    layers.sphere,
    layers.teardrop,
    layers.triangle,
    layers.circle,
    layers.unknown
  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
  "changing Ufos": layers.changing,
  "chevron Ufos": layers.chevron,
  "cigar Ufos": layers.cigar,
  "circle Ufos": layers.triangle,
  "cone Ufos": layers.cone,
  "cross Ufos": layers.cross,
  "cylinder Ufos": layers.cylinder,
  "diamond Ufos": layers.diamond,
  "disk Ufos": layers.disk,
  "egg Ufos": layers.egg,
  "fireball Ufos": layers.fireball,
  "flash Ufos": layers.flash,
  "formation Ufos": layers.formation,
  "light Ufos": layers.light,
  "other Ufos": layers.other,
  "oval Ufos": layers.oval,
  "rectangle Ufos": layers.rectangle,
  "sphere Ufos": layers.sphere,
  "teardrop Ufos": layers.teardrop,
  "triangle Ufos": layers.triangle,
  "unknown Ufos": layers.unknown
};



// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays, {collapsed:false}).addTo(map);

// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(map);

// Initialize an object containing icons for each layer group
var icons = {
  changing: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  chevron: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  cigar: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  cone: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  cross: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  }),
  cylinder: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  diamond: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  disk: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  egg: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  fireball: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  }),
  flash: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  formation: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  light: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  other: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  oval: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  }),
  rectangle: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  sphere: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  teardrop: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  triangle: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  circle: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  unknown: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  })
};

// Perform an a read of the filtered UFO data file

const url = "./static/Resources/filtered.json";

// When the first API call is complete, perform another call to the Citi Bike ufo Status endpoint
d3.json(url).then(function(sighting) {
  console.log("data:",sighting);

  // Get today's date
  var today = new Date();
  var updatedAt  = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  // var ufoStatus = sighting.data.ufos;
  
  // Create an object to keep of the number of markers in each layer
  var ufoCount = {
    changing: 0,
    chevron: 0,
    cigar: 0,
    cone: 0,
    cross: 0,
    cylinder: 0,
    diamond: 0,
    disk: 0,
    egg: 0,
    fireball: 0,
    flash: 0,
    formation: 0,
    light: 0,
    other: 0,
    oval: 0,
    rectangle: 0,
    sphere: 0,
    teardrop: 0,
    triangle: 0,
    circle: 0,
    unknown: 0
  };

  // Initialize a ufoshape, which will be used as a key to access the appropriate layers, icons, and ufo count for layer group
  var ufoshape;
  var ufoInfo = sighting;

  map_lat=sighting[1].city_latitude;
  map_long=sighting[1].city_longitude;
  map.flyTo([map_lat, map_long],5);

  // Loop through the ufos (they're the same size and have partially matching data)
  for (var i = 0; i < ufoInfo.length; i++) {
    var ufo_city = sighting[i].city;
    var ufo_shape = sighting[i].shape;
    var city_lat = sighting[i].city_latitude;
    var city_long = sighting[i].city_longitude;
    var ufo_summary = sighting[i].summary;
    var ufo_date = sighting[i].date;
  
    console.log("city: ",ufo_city);
    console.log("shape: ",ufo_shape);
    console.log("city_lat: ",city_lat);
    console.log("city_long: ",city_long);
    console.log("summary: ",ufo_summary);



    // Update the ufo count
    ufoCount[ufo_shape]++;
    // Create a new marker with the appropriate icon and coordinates
    var newMarker = L.marker([city_lat, city_long], {
      icon: icons[ufo_shape]
    });

    // Add the new marker to the appropriate layer
    console.log("ufo shape: ", ufo_shape);
    newMarker.addTo(layers[ufo_shape]);

    // Bind a popup to the marker that will  display on click. This will be rendered as HTML
    newMarker.bindPopup(ufo_date + "<br> Shape: " + ufo_shape + "<br>" + "Summary: " + ufo_summary);
  }

  // Call the updateLegend function, which will... update the legend!
  console.log("update date: ", updatedAt);
  updateLegend(updatedAt, ufoCount);
});


// Update the legend's innerHTML with the last updated time and ufo count
function updateLegend(time, ufoCount) {
  document.querySelector(".legend").innerHTML = [
    "<h5>Updated: " + time + "</h5>",
    "<p>Changing ufos: " + ufoCount.changing + "</p>",
    "<p>Chevron ufos: " + ufoCount.chevron + "</p>",
    "<p>Cigar ufos: " + ufoCount.cigar + "</p>",
    "<p>Circle ufos: " + ufoCount.circle + "</p>",
    "<p>Cone ufos: " + ufoCount.cone + "</p>",
    "<p>Cross ufos: " + ufoCount.cross + "</p>",
    "<p>Cylinder ufos: " + ufoCount.cylinder + "</p>", 
    "<p>Diamond ufos: " + ufoCount.diamond + "</p>",    
    "<p>Disk ufos: " + ufoCount.disk + "</p>",
    "<p>Egg ufos: " + ufoCount.egg + "</p>",
    "<p>Fireball ufos: " + ufoCount.fireball + "</p>",
    "<p>Flash ufos: " + ufoCount.flash + "</p>",    
    "<p>Formation ufos: " + ufoCount.formation + "</p>",
    "<p>Light ufos: " + ufoCount.light + "</p>",
    "<p>Other ufos: " + ufoCount.other + "</p>",
    "<p>Oval ufos: " + ufoCount.oval + "</p>",
    "<p>Rectangle ufos: " + ufoCount.rectangle + "</p>",
    "<p>Sphere ufos: " + ufoCount.sphere + "</p>",
    "<p>Teardrop ufos: " + ufoCount.teardrop + "</p>",
    "<p>Triangle ufos: " + ufoCount.triangle + "</p>",
    "<p>Unknown ufos: " + ufoCount.unknown + "</p>"
  ].join("");
}

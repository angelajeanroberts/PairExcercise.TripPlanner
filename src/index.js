console.log('This worked!');
const {buildMarker} = require('./marker')
const mapboxgl = require("mapbox-gl");
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

console.log('this is the mapbox', mapboxgl)
mapboxgl.accessToken = "pk.eyJ1IjoiaGFubmJhcnRvbiIsImEiOiJjam1pNHNtcWkwMTg3M3BvZWw5eXV2emcyIn0.Sg74WHf9WAT4mu1_tbv0Nw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


// const marker = new mapboxgl.Marker(buildHotel()).setLngLat(coordinates()).addTo(map);

buildMarker('hotel', [-74.011589, 40.703137]).addTo(map)
console.log(buildMarker('hotel', [-74.011589, 40.703137]).addTo(map));

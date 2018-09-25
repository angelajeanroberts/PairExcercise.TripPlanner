const mapboxgl = require("mapbox-gl");

const buildMarker = (str, coordsArr) => {
    const marker = document.createElement("div"); // Create a new, detached DIV
    marker.style.width = "32px";
    marker.style.height = "39px";

    if (str === 'hotel') {
        marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }
    if (str === 'restaurant') {
        marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    else {
        marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }

    let newMarker = new mapboxgl.Marker(marker).setLngLat(coordsArr);
    return newMarker;

    // new mapboxgl.Marker(hotel).setLngLat([-74.011589, 40.703137]).addTo(map)
}

// const coordinates = () => {
//     return [-73.9900405, 40.752029];
// }

module.exports = { buildMarker}


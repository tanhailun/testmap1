console. log ("use strict")
console. log ("Loaded map.js")
mapboxgl.accessToken = "pk.eyJ1IjoidGFuaGFpbHVuIiwiYSI6ImNrN3h5NDVjcDAweGYzbG83YTdvcjhjYmIifQ.CMP3ZyJYJOCVhum1Mu3vmw"
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-73.96024, 40.80877],
    zoom: 12
})
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {
	let lng = event.coords.longitude
    let lat = event.coords.latitude
    console.log('geolocated:', lng, lat)
     document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)
})
    

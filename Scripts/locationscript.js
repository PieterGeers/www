var loc = document.getElementById('myloc');
var mapdiv = document.getElementById('map');
var map;

function myLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
		loc.innerHTML = "FBI can't find your location.";
	}
}

function showPosition(position) {
	var mapLat = round(position.coords.latitude, 5);
	var mapLng = round(position.coords.longitude,5);
	var mapDefaultZoom = 10;
	mapdiv.classList.remove("invis");
	initialize_map(mapLng, mapLat, mapDefaultZoom);
	add_map_point(mapLat, mapLng);
	loc.innerHTML = "Latitude: " + mapLat + " - Longitude: " + mapLng;
}

function round(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
}



function initialize_map(maplong, maplat, defzoom) {
	map = new ol.Map({
		target: "map", layers: [new ol.layer.Tile({
			source: new ol.source.OSM({url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
				})
			})
		], view: new ol.View({
			center: ol.proj.fromLonLat([maplong, maplat]), zoom: defzoom
			})
		});
	}

function add_map_point(lat, lng) {
	var vectorLayer = new ol.layer.Vector({
		source:new ol.source.Vector({
			features: [new ol.Feature({
				geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
				})]
			}), style: new ol.style.Style({
				image: new ol.style.Icon({
					anchor: [0.5, 0.5], anchorXUnits: "fraction", anchorYUnits: "fraction",
						src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
					})
				})
			});
	map.addLayer(vectorLayer);
}
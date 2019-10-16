var loc = document.getElementById('myloc');

function myLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
		loc.innerHTML = "FBI can't find your location.";
	}
}

function showPosition(position) {
	loc.innerHTML = "Longitude: " + round(position.coords.longitude,5) + "<br>Latitude: " + round(position.coords.latitude, 5) + "<br>";
}

function round(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
}
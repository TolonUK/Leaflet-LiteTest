
L.Projection.SphericalMercator = {
	MAX_LATITUDE: 85.0511287798,
		
	project: function(/*LatLng*/ latlng) /*-> Point*/ {
		var d = L.LatLng.DEG_TO_RAD,
			max = this.MAX_LATITUDE,
			lat = Math.max(Math.min(max, latlng.lat), -max),
			x = latlng.lng * d,
			y = lat * d;
		y = Math.log(Math.tan(Math.PI/4 + y/2));
		
		return new L.Point(x, y);
	},
	
	unproject: function(/*Point*/ point, /*Boolean*/ unbounded) /*-> LatLng*/ {	
		var d = L.LatLng.RAD_TO_DEG,
			lng = point.x * d,
			lat = (2 * Math.atan(Math.exp(point.y)) - Math.PI/2) * d;
			
		return new L.LatLng(lat, lng, unbounded);
	}
};

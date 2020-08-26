const initMap = ({ lat, lng }) => {
    return new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng },
        zoom: 15
    });
}

const initMarker = ({ map, pos }) => {
    return new google.maps.Marker({ map, pos });
}

function createMarker(info, map, place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

const getCurrentPosition = ({ onSuccess, onError = () => { } }) => {
    if ('geolocation' in navigator === false) {
        return onError(new Error('Geolocation is not supported by your browser.'));
    }

    return navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

const getPositionErrorMessage = code => {
    switch (code) {
        case 1:
            return 'Permission denied.';
        case 2:
            return 'Position unavailable.';
        case 3:
            return 'Timeout reached.';
        default:
            return null;
    }
}

function init() {
    const startingPoint = {
        lat: 59.325,
        lng: 18.069
    };

    const map = initMap(startingPoint);
    const marker = initMarker({ map, position: startingPoint });
    
    const infowindow = new google.maps.InfoWindow();
    
    const request = {
        query: document.getElementById("item").value,
        fields: ['name', 'geometry'],
    };
    
    getCurrentPosition({
        onSuccess: ({
            coords: { latitude: lat,
                      longitude: lng 
                }
            }) => {
            marker.setPosition({ lat, lng });
            map.panTo({ lat, lng });
      },
        onError: err =>
          alert(`Error: ${getPositionErrorMessage(err.code) || err.message}`)
    });
    
    const service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(infowindow, map, results[i]);
            }
            
            map.setCenter(results[0].geometry.location);
        }
    });
}
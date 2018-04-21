var  myMap = "AIzaSyAulT-NhYydhJUnZbDPKRwjKmcsZFsMx9I"

var map;
      function initMap() {
        var storeLocation = {lat: 11.360366, lng: 77.827660};

        map = new google.maps.Map(document.getElementById('ptc-map'), {
              'center': storeLocation,
              'zoom': 14,
              'draggable' : false
        });
        var popUpContent = "Welcome to Innovation center<br>"
            popUpContent += "KSR EDUCATIONAL INSTITUTION<br>"
            popUpContent += "Tiruchengode, Namakkal."

        var infowindow = new google.maps.InfoWindow({
          content: popUpContent
        });

        var marker = new google.maps.Marker({
            'position': storeLocation,
            'map': map,
            'title': 'Innovation Center - KSR college of technology'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

      }

define(['backbone', 'leaflet'], function(Backbone, L) {
  
  var MapWidget = Backbone.View.extend({
    
    el: '#mapWidget',
    className: 'widget',
    hasRendered: false,
    map: undefined, // will be Leaflet map object

    initialize: function() {

      _.bindAll(this);
      this.model.on('change:lat change:lon', this.render);
      this.breadcrumb = [];
    },

    render: function() {
      lat = this.model.get('lat') || 64.88317;
      lon = this.model.get('lon') || -147.6137;
      console.log(this.model.toJSON());
      
      if( false === this.hasRendered ) {
        // Do initial map setup
        this.renderLayout();
        this.hasRendered = true;
      }

      var LatLng = new L.LatLng(lat, lon);

      var m = new L.CircleMarker(LatLng).setRadius(10);
      this.breadcrumb.unshift(m);
      
      if(this.breadcrumb.length>50){
        this.breadcrumb[1].addTo(this.map);
        this.map.removeLayer(this.breadcrumb.pop());
        _.each(this.breadcrumb, function(e, i, l) {
          e.setStyle({
            fillOpacity: 1/ (i + 1),
            opacity: 2 * (1/ (1 + i))
          });
        }, this);
      }

      this.map.panTo( LatLng );
      
      this.marker.setLatLng( LatLng );

      
    },

    renderLayout: function() {

      // create a map in the "map" div, set the view to a given place and zoom
      this.map = L.map('mapWidget', {
        minZoom: 1,
        maxZoom: 22
      }).setView([64.9, -147.1], 16);

      this.myIcon = L.icon({
          iconUrl: 'images/jet.svg',
          iconSize: [25, 50],
          iconAnchor: [12, 25],
          popupAnchor: [-3, -76]
      });

      this.marker = L.marker([64.9, -147.1], {icon: this.myIcon}).addTo(this.map);

      var bing = new L.BingLayer("ArSmVTJNY8ZXaAjsxCHf989sG9OqZW3Qf0t1SAdM43Rn9pZpFyWU1jfYv_FFQlLO", {
        zIndex: 0
      });
      this.map.addLayer(bing);
      this.map.on('click', function(e) {
        alert(e.latlng);
      });

    }
  });
  return MapWidget;

});
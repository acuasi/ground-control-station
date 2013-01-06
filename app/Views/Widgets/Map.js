define(['backbone', 'leaflet'], function(Backbone, L) {
  
  var MapWidget = Backbone.View.extend({
    
    el: '#mapWidget',
    className: 'widget',
    hasRendered: false,
    map: undefined, // will be Leaflet map object

    initialize: function() {

      _.bindAll(this);
      this.model.on('change:lat change:lon', this.render);
    },

    render: function() {
      if( false === this.hasRendered ) {
        // Do initial map setup
        this.renderLayout();
        this.hasRendered = true;
      }

      lat = this.model.get('lat') || 64.88317;
      lon = this.model.get('lon') || -147.6137;
      console.log(lat + ',' + lon);
      this.map.panTo( new L.LatLng(lat, lon) ).setZoom(13);

    },

    renderLayout: function() {

      // create a map in the "map" div, set the view to a given place and zoom
      this.map = L.map('mapWidget', {
        minZoom: 1,
        maxZoom: 15
      }).setView([64.9, -147.1], 10);

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
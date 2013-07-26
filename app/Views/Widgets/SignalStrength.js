// Widget to display the radio signal strength
define(['require', 'backbone', 'Templates'], function(require, Backbone, template) {
  var SignalStrengthWidget = Backbone.View.extend({
    
    el: '#signalStrengthWidget',
    className: 'widget',

    initialize: function() {
      _.bindAll(this);
      this.model.on("change:strength change:connected", this.render, this);
    },
 
    render: function() {
      this.$el.html(template['signalStrengthWidget'](
        {icon: this.getIcon()}));
    },
    
    getIcon: function() {
    	// This generates a path to the images relative to the directory containing
    	// the html, so the correct path should be automatically generated.
    	var imagesDir = require.toUrl("../../.././public/images/");

    	if(!this.model.get('connected')) {
    		return imagesDir + "no-signal.svg";
    	}
    	else {
    		var signalStrength = this.model.get('strength');
    		if(signalStrength >= 90) {
    			return imagesDir + "4-bars.svg";
    		}
    		else if(signalStrength >= 60) {
    			return imagesDir + "3-bars.svg";
    		}
    		else if(signalStrength >= 30) {
    			return imagesDir + "2-bars.svg";
    		}
    		else if(signalStrength >= 0) {
    			return imagesDir + "1-bar.svg";
    		}
    	}
    }
    
  });
  
  return SignalStrengthWidget;

});

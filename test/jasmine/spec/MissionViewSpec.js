require(['Views/Mission'], function(MissionView) {

  describe("MissionView", function() {
    
    beforeEach(function() {
      setFixtures(sandbox({id:'missionView'}));
      var v = new MissionView();
      v.render();
    });

    it('Renders a scaffolding template with IDs for subviews', function() {
      expect($('#missionView')).not.toBeEmpty();
      expect($('#speedWidget')).toBeDefined();
      expect($('#batteryWidget')).toBeDefined();
      expect($('#altitudeWidget')).toBeDefined();
      expect($('#mapWidget')).toBeDefined();
      expect($('#commsWidget')).toBeDefined();
      expect($('#gpsWidget')).toBeDefined();
      expect($('#healthWidget')).toBeDefined();
      expect($('#stateWidget')).toBeDefined();
    });

    it('Renders its subviews', function() {
      console.log($('#speedWidget').html());
      expect($('#speedWidget').html()).not.toBeUndefined();
      expect($('#batteryWidget').html()).not.toBeUndefined();
      expect($('#altitudeWidget').html()).not.toBeUndefined();
      expect($('#mapWidget').html()).not.toBeUndefined();
      expect($('#commsWidget').html()).not.toBeUndefined();
      expect($('#gpsWidget').html()).not.toBeUndefined();
      expect($('#healthWidget').html()).not.toBeUndefined();
      expect($('#stateWidget').html()).not.toBeUndefined();
    });
  });

});
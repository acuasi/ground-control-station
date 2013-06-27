require(['Models/Mission', 'Models/Platform', 'Views/Mission'], function(Mission, Platform, MissionView) {

  describe("MissionView", function() {
    
    beforeEach(function() {
      
      this.platform = new Platform();
      this.mission = new Mission({
        platform: this.platform
      });

      // Create a DIV for rendering the mission view into, so we can use the jquery selectors to find elements in the DOM.
      setFixtures(sandbox({id:'missionView'}));
      this.missionView = new MissionView({
        model: this.mission
      });

      this.missionView.render();

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
      expect($('#speedWidget').html()).not.toBeUndefined();
      expect($('#altitudeWidget').html()).not.toBeUndefined();
      expect($('#mapWidget').html()).not.toBeUndefined();
      expect($('#commsWidget').html()).not.toBeUndefined();
      expect($('#gpsWidget').html()).not.toBeUndefined();
      expect($('#healthWidget').html()).not.toBeUndefined();
    });
  });

});
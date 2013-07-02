// The "require" call maps source code to symbols used to reference
// that source code as a module.
require([
  // Libraries

  // Models
  'Models/Platform', // source file, referenced as Platform

  // Views
  'Views/Widgets/Altitude',
  'Views/Widgets/Battery',
  'Views/Widgets/Comms',
  'Views/Widgets/Gps',
  'Views/Widgets/Health',
  'Views/Widgets/Map',
  'Views/Widgets/Speed',
  'Views/Widgets/State'
  ], function(
    // Models
    Platform,  // the symbol by which the Models/Platform code will be seen as a module

    // Views
    altitudeWidget,
    batteryWidget,
    commsWidget,
    gpsWidget,
    healthWidget,
    mapWidget,
    speedWidget,
    stateWidget
    ) {

      // Add a collection of tests
      describe("Speed widget", function() {

        // Setup function -- will execute before every test
        beforeEach(function() {

          // Create a DOM element to render into
          setFixtures(sandbox({id:'speedWidget'}));

          // Create a 'platform' Backbone model, which the view observes
          this.platform = new Platform();

          // Create the view we want to test
          this.speedWidget = new speedWidget({
            model: this.platform
          });

          // Render to the sandbox div
          this.speedWidget.render();

        });

        it("should render a numeric value in the span.value element", function() {
          expect(isNaN(Number($('#speedWidget span.value').text()))).toBe(false);
        });
        
      });

      describe("Altitude widget", function() {

        beforeEach(function() {

          // Create a DOM element to render into
          setFixtures(sandbox({id:'altitudeWidget'}));

          // Create a 'platform' Backbone model, which the view observes
          this.platform = new Platform();

          // Create the view we want to test
          this.altitudeWidget = new altitudeWidget({
            model: this.platform
          });

          // Render to the sandbox div
          this.altitudeWidget.render();

        });

        it("should render a numeric value in the span.value element", function() {
          expect(isNaN(Number($('#altitudeWidget span.value').text()))).toBe(false);
        });

        it("should round value to 1 decimal place", function() {
          var value = $('#altitudeWidget span.value').text();
          var fractional = value.indexOf(".") + 1; // Start of fractional part
          
          expect(value).toContain('.');
          expect(value.slice(fractional).length()).toEqual(1);
        });

      });

    } 
);
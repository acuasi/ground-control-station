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
          expect(isFinite(Number($('#speedWidget span.value').text()))).toBe(true);
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
        
        it("should display the altitude in the span.value element", function() {
          var renderedValue;

          this.altitudeWidget.model.set('alt', 13.5);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('13.5');

          this.altitudeWidget.model.set('alt', 10.5);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('10.5');
        });

        it("should round value to 1 decimal place", function() {
          var renderedValue;

          this.altitudeWidget.model.set('alt', 10.50);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('10.5');

          this.altitudeWidget.model.set('alt', 10.54);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('10.5');

          this.altitudeWidget.model.set('alt', 10.55);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('10.6');

          this.altitudeWidget.model.set('alt', 10.59);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('10.6');

          this.altitudeWidget.model.set('alt', 10.549);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('10.5');

          this.altitudeWidget.model.set('alt', 10);
          renderedValue = $('#altitudeWidget span.value').text();
          expect(renderedValue).toBe('10.0');
        });

      });

    } 
);
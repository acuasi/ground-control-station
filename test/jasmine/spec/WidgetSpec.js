// The "require" call maps source code to symbols used to reference
// that source code as a module.
require([
  // Libraries

  // Models
  'Models/Platform', // source file, referenced as Platform
  'Models/RadioConnection',

  // Views
  'Views/Widgets/Altitude',
  'Views/Widgets/Battery',
  'Views/Widgets/Comms',
  'Views/Widgets/Gps',
  'Views/Widgets/Health',
  'Views/Widgets/Map',
  'Views/Widgets/Speed',
  'Views/Widgets/State',
  'Views/Widgets/SignalStrength'
  ], function(
    // Models
    Platform,  // the symbol by which the Models/Platform code will be seen as a module
    RadioConnection,

    // Views
    altitudeWidget,
    batteryWidget,
    commsWidget,
    gpsWidget,
    healthWidget,
    mapWidget,
    speedWidget,
    stateWidget,
    signalStrengthWidget
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

        it("should display the speed in the span.value element", function() {
          var renderedValue;
          
          this.speedWidget.model.set('groundspeed', 13);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('13');

          this.speedWidget.model.set('groundspeed', 10);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('10');
        });
        
        it("should round value to the nearest integer", function() {
          var renderedValue;

          this.speedWidget.model.set('groundspeed', 10.5);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('11');

          this.speedWidget.model.set('groundspeed', 10.4);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('10');

          this.speedWidget.model.set('groundspeed', 10.49);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('10');

          this.speedWidget.model.set('groundspeed', 10.9);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('11');

          this.speedWidget.model.set('groundspeed', 10.0);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('10');

          this.speedWidget.model.set('groundspeed', 10);
          renderedValue = $('#speedWidget span.value').text();
          expect(renderedValue).toBe('10');
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
      
      // Signal strength widget shows the strength of the connection with the UAV
      describe("Signal strength widget", function() {

        beforeEach(function() {
        	setFixtures(sandbox({id:'signalStrengthWidget'}));
        	
        	this.connection = new RadioConnection();
        	
        	this.signalStrength = new signalStrengthWidget({
        		model: this.connection
        	});
        	this.signalStrength.render();
      	});

      	it("should display no-signal icon when NOT connected", function() {
      		this.signalStrength.model.set('connected', false);
      		this.signalStrength.model.set('strength', 0);
      		expect($('#signalStrengthWidget img').attr('src')).toContain('no-signal.svg');
      		expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

      		this.signalStrength.model.set('strength', 25);
      		expect($('#signalStrengthWidget img').attr('src')).toContain('no-signal.svg');
      		expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

      		this.signalStrength.model.set('strength', 50);
      		expect($('#signalStrengthWidget img').attr('src')).toContain('no-signal.svg');
      		expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

      		this.signalStrength.model.set('strength', 75);
      		expect($('#signalStrengthWidget img').attr('src')).toContain('no-signal.svg');
      		expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

      		this.signalStrength.model.set('strength', 100);
      		expect($('#signalStrengthWidget img').attr('src')).toContain('no-signal.svg');
      		expect($('#signalStrengthWidget img').prop('complete')).toBe(true);
       	});
      	
      	describe("when connected:", function(){
					it("should display 4-bars icon when signal strength >= 90%", function() {
						this.signalStrength.model.set('connected', true);
						this.signalStrength.model.set('strength', 90);
						expect($('#signalStrengthWidget img').attr('src')).toContain('4-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

						this.signalStrength.model.set('strength', 100);
						expect($('#signalStrengthWidget img').attr('src')).toContain('4-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);
					});
					
					it("should display 3-bars icon when 60% <= signal strength < 90%", function() {
						this.signalStrength.model.set('connected', true);
						this.signalStrength.model.set('strength', 89);
						expect($('#signalStrengthWidget img').attr('src')).toContain('3-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

						this.signalStrength.model.set('strength', 75);
						expect($('#signalStrengthWidget img').attr('src')).toContain('3-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

						this.signalStrength.model.set('strength', 60);
						expect($('#signalStrengthWidget img').attr('src')).toContain('3-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);
					});
					
					it("should display 2-bars icon when 30% <= signal strength < 60%", function() {
						this.signalStrength.model.set('connected', true);
						this.signalStrength.model.set('strength', 59);
						expect($('#signalStrengthWidget img').attr('src')).toContain('2-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

						this.signalStrength.model.set('strength', 45);
						expect($('#signalStrengthWidget img').attr('src')).toContain('2-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

						this.signalStrength.model.set('strength', 30);
						expect($('#signalStrengthWidget img').attr('src')).toContain('2-bars.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);
					});
					
					it("should display 1-bar icon when 0% <= signal strength < 30%", function() {
						this.signalStrength.model.set('connected', true);
						this.signalStrength.model.set('strength', 29);
						expect($('#signalStrengthWidget img').attr('src')).toContain('1-bar.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

						this.signalStrength.model.set('strength', 15);
						expect($('#signalStrengthWidget img').attr('src')).toContain('1-bar.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);

						this.signalStrength.model.set('strength', 0);
						expect($('#signalStrengthWidget img').attr('src')).toContain('1-bar.svg');
						expect($('#signalStrengthWidget img').prop('complete')).toBe(true);
					});
      	});
     });

    } 
);
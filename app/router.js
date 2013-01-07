define([

  // Application + dependencies
  "app",
  "now",

  // Models
  "Models/Mission",
  "Models/Platform",

  // Dependent views
  "Views/Mission"
],

function(app, now,
  Mission,
  Platform,
  MissionView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    routes: {
      "": "mission",
      "mission": "mission"
    },
    
    mission: function() {

      this.platform = new Platform();
      this.mission = new Mission({
        platform: this.platform
      });

      this.missionView = new MissionView({
        model: this.mission
      });

      this.missionView.render();

      var self = this; // preserve my context for some calls, below.

      // Handle message events as they are provided from the server
      // This won't scale =P
      now.ready(function(){
        
        now.heartbeat = function(message) {
          self.platform.set({
            type: message.type,
            autopilot: message.autopilot,
            base_mode: message.base_mode,
            custom_mode: message.custom_mode,
            system_status: message.system_status,
            mavlink_version: message.mavlink_version
          });
        };

        now.global_position_int = function(message) {
          self.platform.set({
            lat: message.lat/10000000,
            lon: message.lon/10000000,
            alt: message.alt/1000,
            relative_alt: message.relative_alt/1000,
            vx: message.vx/100,
            vy: message.vy/100,
            vz: message.vz/100,
            hdg: message.hdg/100
          });
        };

        now.sys_status = function(message) {
          self.platform.set({
            voltage_battery: message.voltage_battery,
            current_battery: message.current_battery,
            battery_remaining: message.battery_remaining,
            drop_rate_comm: message.drop_rate_comm,
            errors_comm: message.errors_comm
          });
        };

        now.attitude = function(message) {
          self.platform.set({
            pitch: message.pitch,
            roll: message.roll,
            yaw: message.yaw,
            pitchspeed: message.pitchspeed,
            rollspeed: message.rollspeed,
            yawspeed: message.yawspeed
          });
        };

        now.vfr_hud = function(message) {
          self.platform.set({
            airspeed: message.airspeed,
            groundspeed: message.groundspeed,
            heading: message.heading,
            throttle: message.throttle,
            climb: message.climb
          });
        };

        now.gps_raw_int = function(message) {
          self.platform.set({
            fix_type: message.fix_type,
            satellites_visible: message.satellites_visible
          });
        };

      });

    }

  });

  return Router;

});
var SerialPort = require("serialport").SerialPort,
  util   = require('util'),
  child = require("child_process"),
  net = require('net');
/*

var masterSerial = net.createConnection(5760, '127.0.0.1');

masterSerial.on('data', function(data) {
  mavlinkParser.parseBuffer(data);
})
*/
/*
 * The main Arduino constructor
 * Connect to the serial port and bind
var UsbConnection = function (options) {
  this.log('info', 'initializing');
  this.debug = options && options.debug || false;
  this.baudrate = options && options.baudrate || 115200;
  this.writeBuffer = [];

  var self = this;
  this.detect(function (err, serial) {
    if (err) {
      if(self.listeners('error').length)
        self.emit('error', err);
      //else
        //throw new Error(err);
    }else{
      self.serial = serial;
      self.emit('connected');

      self.log('info', 'binding serial events');

      // Try and parse incoming data through the serial connection
      self.serial.on('data', function(data) {
        self.log('receive', data.toString().red);
        mavlinkParser.parseBuffer(data);
      });
      /*self.serial.on('data', function(data){
        self.log('receive', data.toString().red);
        self.emit('data', data);
      });

      setTimeout(function(){
        self.log('info', 'board ready');
        //self.sendClearingBytes();

        /*if (self.debug) {
          self.log('info', 'sending debug mode toggle on to board');
          self.write('99' + self.normalizePin(0) + self.normalizeVal(1));
          process.on('SIGINT', function(){
            self.log('info', 'sending debug mode toggle off to board');
            self.write('99' + self.normalizePin(0) + self.normalizeVal(0));
            delete self.serial;
            setTimeout(function(){
              process.exit();
            }, 100);
          });
        }

        if (self.writeBuffer.length > 0) {
          self.processWriteBuffer();
        }

        self.emit('ready');
      }, 500);
    }
  });
};

/*
 * EventEmitter, I choose you!
 
util.inherits(UsbConnection, events.EventEmitter);

// Open the serial connection -- TODO, make this resiliant/trying until it finds it / GUI driven, etc.
// trying to adapt from this code:
//    https://github.com/ecto/duino/blob/master/lib/board.js

UsbConnection.prototype.detect = function(callback){
  child.exec('ls /dev | grep usb', function(err, stdout, stderr){
    console.log('Looking for a usbserial device');
    console.log("stdout: ", stdout);
      var usb = stdout.slice(0, -1).split('\n'),
          found = false,
          possible,
          temp;

      console.log("usb", usb);

      while ( usb.length ) {
        possible = usb.pop();
        console.log("possible: ", possible);

        if (possible.slice(0, 2) !== 'cu') {
          try {
            temp = new SerialPort('/dev/' + possible, {
              baudrate: 115200
            });
          } catch (e) {
            err = e;
          }
          if (!err) {
            found = temp;
            console.log('Found board at ' + temp.port);
            break;
          } else {
            err = new Error('Could not find usbserial device');
            console.log('Could not find a usbserial device');
          }
        }
      }

      callback(err, found);
    });
};
*/

/*
 * Logger utility function
 
UsbConnection.prototype.log = function (/*level, message) {
  var args = [].slice.call(arguments);
  if (this.debug) {
    console.log(String(+new Date()).grey + ' duino '.blue + args.shift().magenta + ' ' + args.join(', '));
  }
};

//masterSerial = detect(nconf.get('serial:baudrate'));
/*new SerialPort(
  nconf.get('serial:device'),
  { baudrate: nconf.get('serial:baudrate') }
);
masterSerial = new UsbConnection();
 */

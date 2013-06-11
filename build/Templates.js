define([], function() {
var jade = {};

/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

jade.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

jade.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + jade.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + jade.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

jade.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

jade.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


var exports = exports || {};
exports["Templates"] = exports["Templates"] || {};

exports["Templates"]["altitudeWidget"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h3>Altitude</h3><div><span class="value">' + ((interp = alt) == null ? '' : interp) + '</span><span class="units">&nbsp;meters</span></div>');
}
return buf.join("");
};

exports["Templates"]["batteryWidget"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h3>Battery</h3><div><span class="value">' + ((interp = battery_remaining) == null ? '' : interp) + '</span><span class="units">&nbsp;%</span></div><div><span class="value">' + ((interp = voltage_battery) == null ? '' : interp) + '</span><span class="units">&nbsp;v</span></div><div><span class="value">' + ((interp = current_battery) == null ? '' : interp) + '</span><span class="units">&nbsp;A</span></div>');
}
return buf.join("");
};

exports["Templates"]["commsWidget"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="comms"><div class="disconnected">Disconnected.</div><div class="connecting">Connecting' + ((interp = time_since_last_heartbeat) == null ? '' : interp) + '.</div><div class="connected">Connected.</div><div><button id="loadParams">Load Parameters</button><button id="loadMission">Load Mission</button><button id="startMission">Start Mission Wooo!</button></div></div>');
}
return buf.join("");
};

exports["Templates"]["gpsWidget"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h3>GPS</h3><div id="position"><span class="units">lat &nbsp;</span><span class="value">' + ((interp = lat) == null ? '' : interp) + ' &nbsp;</span><span class="units">lon &nbsp;</span><span class="value">' + ((interp = lon) == null ? '' : interp) + ' &nbsp;</span></div><div id="gps_stats"><div id="location"><span class="units">fix_type &nbsp;</span><span class="value">' + ((interp = fix_type) == null ? '' : interp) + ' &nbsp;</span></div><div id="stats"><span class="units">satellites_visible &nbsp;</span><span class="value">' + ((interp = satellites_visible) == null ? '' : interp) + ' &nbsp;</span></div></div>');
}
return buf.join("");
};

exports["Templates"]["healthWidget"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="flightMode">Flight Mode:&nbsp;<span>' + ((interp = stateMode) == null ? '' : interp) + '</span></div><div class="flightModeArmed">Armed</div><div class="flightModeDisarmed">Disarmed</div>');
}
return buf.join("");
};

exports["Templates"]["missionLayout"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="widgets"><div id="speedWidget" class="widget"></div><div id="altitudeWidget" class="widget"></div><div id="commsWidget" class="widget"></div><div id="healthWidget" class="widget"></div></div><div id="mapWidget"></div><div id="gpsWidget" class="widget"></div>');
}
return buf.join("");
};

exports["Templates"]["speedWidget"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h3>Ground Speed</h3><span class="value">' + ((interp = groundspeed) == null ? '' : interp) + '</span><span class="units">&nbsp;km/h</span>');
}
return buf.join("");
};
return exports["Templates"];
});
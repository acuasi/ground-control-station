define(['jade'], function(jade) {
this["Templates"] = this["Templates"] || {};

this["Templates"]["app/Templates/altitudeWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<span class="value">' + ((interp = alt) == null ? '' : interp) + '</span><span class="units">&nbsp;meters</span>');
}
return buf.join("");
};

this["Templates"]["app/Templates/batteryWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<span class="value">' + ((interp = battery_remaining) == null ? '' : interp) + '</span><span class="units">&nbsp;%</span>');
}
return buf.join("");
};

this["Templates"]["app/Templates/commsWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="comms"><span class="units">drop_rate &nbsp;</span><span class="value">' + ((interp = drop_rate_comm) == null ? '' : interp) + ' &nbsp;</span><span class="units">errors_comm &nbsp;</span><span class="value">' + ((interp = errors_comm) == null ? '' : interp) + ' &nbsp;</span></div>');
}
return buf.join("");
};

this["Templates"]["app/Templates/gpsWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="position"><span class="units">lat &nbsp;</span><span class="value">' + ((interp = lat) == null ? '' : interp) + ' &nbsp;</span><span class="units">lon &nbsp;</span><span class="value">' + ((interp = lon) == null ? '' : interp) + ' &nbsp;</span></div><div id="gps_stats"><span class="units">fix_type &nbsp;</span><span class="value">' + ((interp = fix_type) == null ? '' : interp) + ' &nbsp;</span><span class="units">satellites_visible &nbsp;</span><span class="value">' + ((interp = satellites_visible) == null ? '' : interp) + ' &nbsp;</span></div>');
}
return buf.join("");
};

this["Templates"]["app/Templates/healthWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="type"><span class="units">type &nbsp;</span><span class="value">' + ((interp = type) == null ? '' : interp) + '</span></div><div id="autopilot"><span class="units">autopilot &nbsp;</span><span class="value">' + ((interp = autopilot) == null ? '' : interp) + '</span></div><div id="base_mode"><span class="units">base_mode &nbsp;</span><span class="value">' + ((interp = base_mode) == null ? '' : interp) + '</span></div><div id="custom_mode"><span class="units">custom_mode &nbsp;</span><span class="value">' + ((interp = custom_mode) == null ? '' : interp) + '</span></div><div id="system_status"><span class="units">system_status &nbsp;</span><span class="value">' + ((interp = system_status) == null ? '' : interp) + '</span></div><div id="mavlink_version"><span class="units">mavlink_version &nbsp;</span><span class="value">' + ((interp = mavlink_version) == null ? '' : interp) + '</span></div>');
}
return buf.join("");
};

this["Templates"]["app/Templates/missionLayout.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="speedWidget" class="widget"></div><div id="batteryWidget" class="widget"></div><div id="altitudeWidget" class="widget"></div><div id="mapWidget" class="widget"></div><div id="commsWidget" class="widget"></div><div id="gpsWidget" class="widget"></div><div id="healthWidget" class="widget"></div><div id="stateWidget" class="widget"></div>');
}
return buf.join("");
};

this["Templates"]["app/Templates/speedWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<span class="value">' + ((interp = speed) == null ? '' : interp) + '</span><span class="units">&nbsp;km/h</span>');
}
return buf.join("");
};
return this["Templates"];
});
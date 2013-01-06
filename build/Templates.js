define(['jade'], function(jade) {
this["Templates"] = this["Templates"] || {};

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
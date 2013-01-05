define(['jade'], function(jade) {
this["Templates"] = this["Templates"] || {};

this["Templates"]["app/Templates/missionLayout.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div>#speedWidget</div><div>#batteryWidget</div><div>#altitudeWidget</div><div>#mapWidget</div><div>#commsWidget</div><div>#gpsWidget</div><div>#healthWidget</div><div>#stateWidget</div>');
}
return buf.join("");
};

this["Templates"]["app/Templates/speedWidget.jade"] = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<span class="value">' + ((interp = speed) == null ? '' : interp) + '</span><span class="units">km/h</span>');
}
return buf.join("");
};
return this["Templates"];
});
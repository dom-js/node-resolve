exports.default = function (def, opts) {
    return exports.extend({}, def, opts);
}
exports.extend = function (org, ext) {
    if (arguments.length == 1) {
        ext = org;
        org = this;
    }

    if (ext) {
        for (var key in ext) {
            org[key] = ext[key]
        }
    }
    if (arguments.length > 2) {
        var arg = Array.prototype.slice.call(arguments, 2);
        exports.extend.apply(this, [org].concat(arg))
    }
    return org
}
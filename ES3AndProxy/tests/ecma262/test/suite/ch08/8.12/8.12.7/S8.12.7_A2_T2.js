wrapTestObject(function Palette() {
});
;
Palette.prototype = wrapTestObject({
    red: 16711680,
    green: 65280
});
var __palette = wrapTestObject(new Palette());
if (__palette.red !== 16711680) {
    $ERROR('#1: function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; __palette.red === 0xFF0000. Actual: ' + __palette.red);
}
if (delete __palette.red !== true) {
    $ERROR('#2 function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; delete __palette.red === true. Actual: ' + delete __palette.red);
}
if (__palette.red !== 16711680) {
    $ERROR('#3: function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; __palette.red === 0xFF0000. Actual: ' + __palette.red);
}
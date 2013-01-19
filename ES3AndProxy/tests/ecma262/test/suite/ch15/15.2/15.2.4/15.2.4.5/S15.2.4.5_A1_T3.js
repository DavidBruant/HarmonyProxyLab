var FACTORY = wrapTestObject(function () {
        this.aproperty = 1;
    });
var instance = wrapTestObject(new FACTORY());
if (typeof Object.prototype.hasOwnProperty !== 'function') {
    $ERROR('#1: hasOwnProperty method is defined');
}
if (typeof instance.hasOwnProperty !== 'function') {
    $ERROR('#2: hasOwnProperty method is accessed');
}
if (instance.hasOwnProperty('toString')) {
    $ERROR('#3: hasOwnProperty method works properly');
}
if (!instance.hasOwnProperty('aproperty')) {
    $ERROR('#4: hasOwnProperty method works properly');
}
if (typeof Object.prototype.hasOwnProperty !== 'function') {
    $ERROR('#1: hasOwnProperty method is defined');
}
var obj = wrapTestObject({ the_property: true });
if (typeof obj.hasOwnProperty !== 'function') {
    $ERROR('#2: hasOwnProperty method is accessed');
}
if (obj.hasOwnProperty('hasOwnProperty')) {
    $ERROR('#3: hasOwnProperty method works properly');
}
if (!obj.hasOwnProperty('the_property')) {
    $ERROR('#4: hasOwnProperty method works properly');
}
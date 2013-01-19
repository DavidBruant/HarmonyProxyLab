if (!Object.prototype.hasOwnProperty.hasOwnProperty('length')) {
    $FAIL('#1: the Object.prototype.hasOwnProperty has length property.');
}
var obj = Object.prototype.hasOwnProperty.length;
Object.prototype.hasOwnProperty.length = wrapTestObject(function () {
    return 'shifted';
});
if (Object.prototype.hasOwnProperty.length !== obj) {
    $ERROR('#2: the Object.prototype.hasOwnProperty length property has the attributes ReadOnly.');
}
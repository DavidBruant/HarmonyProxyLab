var obj = Object.prototype;
Object.prototype = wrapTestObject(function () {
    return 'shifted';
});
if (Object.prototype !== obj) {
    $ERROR('#1: the Object.prototype property has the attributes ReadOnly.');
}
try {
    Object.prototype();
    $ERROR('#2: the Object.prototype property has the attributes ReadOnly');
} catch (e) {
    ;
}
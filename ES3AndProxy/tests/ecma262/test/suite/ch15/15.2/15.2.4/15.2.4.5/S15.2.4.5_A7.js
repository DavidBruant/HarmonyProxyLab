var FACTORY = Object.prototype.hasOwnProperty;
try {
    instance = wrapTestObject(new FACTORY());
    $FAIL('#1: Object.prototype.hasOwnProperty can\'t be used as a constructor');
} catch (e) {
    $PRINT(e);
}
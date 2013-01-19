wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({
        writable: true,
        enumerable: false,
        configurable: false
    }));
    var verifyValue = false;
    if (arrObj.length === 0) {
        verifyValue = true;
    }
    arrObj.length = 2;
    var verifyWritable = arrObj.length === 2 ? true : false;
    var verifyEnumerable = false;
    for (var p in arrObj) {
        if (p === 'length' && arrObj.hasOwnProperty(p)) {
            verifyEnumerable = true;
        }
    }
    delete arrObj.length;
    var verifyConfigurable = arrObj.hasOwnProperty('length');
    return verifyValue && verifyWritable && !verifyEnumerable && verifyConfigurable;
});
runTestCase(testcase);
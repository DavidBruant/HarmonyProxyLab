wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: NaN }));
    Object.defineProperty(arrObj, '0', wrapTestObject({ value: NaN }));
    var hasProperty = arrObj.hasOwnProperty('0');
    var verifyValue = arrObj[0] !== arrObj[0];
    var verifyWritable = false;
    arrObj[0] = 1001;
    verifyWritable = arrObj[0] !== 1001 && arrObj[0] !== arrObj[0];
    var verifyEnumerable = false;
    for (var p in arrObj) {
        if (p === '0') {
            verifyEnumerable = true;
        }
    }
    var verifyConfigurable = false;
    delete arrObj[0];
    verifyConfigurable = arrObj.hasOwnProperty('0');
    return hasProperty && verifyValue && verifyWritable && !verifyEnumerable && verifyConfigurable;
});
runTestCase(testcase);
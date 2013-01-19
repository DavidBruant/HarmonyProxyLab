wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, '1', wrapTestObject({ set: undefined }));
    var hasProperty = arrObj.hasOwnProperty('1');
    Object.defineProperty(arrObj, '1', wrapTestObject({ set: undefined }));
    var desc = Object.getOwnPropertyDescriptor(arrObj, '1');
    var verifyGet = desc.hasOwnProperty('get') && typeof desc.get === 'undefined';
    var verifySet = desc.hasOwnProperty('set') && typeof desc.set === 'undefined';
    var verifyEnumerable = false;
    for (var p in arrObj) {
        if (p === '1') {
            verifyEnumerable = true;
        }
    }
    var verifyConfigurable = false;
    delete arrObj[1];
    verifyConfigurable = arrObj.hasOwnProperty('1');
    return hasProperty && verifyGet && verifySet && !verifyEnumerable && verifyConfigurable;
});
runTestCase(testcase);
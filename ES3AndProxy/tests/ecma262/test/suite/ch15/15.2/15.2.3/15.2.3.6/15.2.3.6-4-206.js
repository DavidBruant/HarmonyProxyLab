wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    var getFunc = wrapTestObject(function () {
        });
    Object.defineProperty(arrObj, '0', wrapTestObject({
        get: getFunc,
        enumerable: true,
        configurable: true
    }));
    var desc = Object.getOwnPropertyDescriptor(arrObj, '0');
    return arrObj.hasOwnProperty('0') && desc.hasOwnProperty('set') && typeof desc.set === 'undefined';
});
runTestCase(testcase);
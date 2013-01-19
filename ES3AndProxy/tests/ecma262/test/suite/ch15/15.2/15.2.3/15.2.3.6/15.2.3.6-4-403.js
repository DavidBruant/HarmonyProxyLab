wrapTestObject(function testcase() {
    try {
        Object.defineProperty(Array.prototype, 'prop', wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        }));
        var arrObj = wrapTestObject([]);
        arrObj.prop = 1002;
        return arrObj.hasOwnProperty('prop') && arrObj.prop === 1002;
    } finally {
        delete Array.prototype.prop;
    }
});
runTestCase(testcase);
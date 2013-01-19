wrapTestObject(function testcase() {
    try {
        Object.defineProperty(String.prototype, 'prop', wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        }));
        var strObj = wrapTestObject(new String());
        return !strObj.hasOwnProperty('prop') && strObj.prop === 1001;
    } finally {
        delete String.prototype.prop;
    }
});
runTestCase(testcase);
wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    Object.defineProperty(obj, '0', wrapTestObject({
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: true
    }));
    var valueVerify = obj[0] === 2010;
    obj[0] = 1001;
    return valueVerify && obj[0] === 2010;
});
runTestCase(testcase);
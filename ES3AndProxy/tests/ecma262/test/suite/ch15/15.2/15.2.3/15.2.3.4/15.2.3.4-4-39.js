wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'a', wrapTestObject({
        get: wrapTestObject(function () {
            return 'a';
        }),
        configurable: true
    }));
    var result = Object.getOwnPropertyNames(obj);
    return result[0] === 'a';
});
runTestCase(testcase);
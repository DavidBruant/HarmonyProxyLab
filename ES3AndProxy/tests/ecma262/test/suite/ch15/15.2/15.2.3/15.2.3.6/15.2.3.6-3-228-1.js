wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Object.prototype.get = wrapTestObject(function () {
            return 'argumentGetProperty';
        });
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(obj, 'property', argObj);
        return obj.property === 'argumentGetProperty';
    } finally {
        delete Object.prototype.get;
    }
});
runTestCase(testcase);
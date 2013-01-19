wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Object.prototype.value = 'arguments';
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(obj, 'property', argObj);
        return obj.property === 'arguments';
    } finally {
        delete Object.prototype.value;
    }
});
runTestCase(testcase);
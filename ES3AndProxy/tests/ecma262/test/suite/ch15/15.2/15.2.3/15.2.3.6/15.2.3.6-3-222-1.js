wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Number.prototype.get = wrapTestObject(function () {
            return 'numberGetProperty';
        });
        var numObj = wrapTestObject(new Number(-2));
        Object.defineProperty(obj, 'property', numObj);
        return obj.property === 'numberGetProperty';
    } finally {
        delete Number.prototype.get;
    }
});
runTestCase(testcase);
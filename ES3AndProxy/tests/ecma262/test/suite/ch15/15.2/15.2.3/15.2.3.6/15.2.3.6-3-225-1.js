wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        RegExp.prototype.get = wrapTestObject(function () {
            return 'regExpGetProperty';
        });
        var regObj = wrapTestObject(new RegExp());
        Object.defineProperty(obj, 'property', regObj);
        return obj.property === 'regExpGetProperty';
    } finally {
        delete RegExp.prototype.get;
    }
});
runTestCase(testcase);
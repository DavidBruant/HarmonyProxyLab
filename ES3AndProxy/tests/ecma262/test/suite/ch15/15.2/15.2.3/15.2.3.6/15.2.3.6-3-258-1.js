wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    try {
        Object.prototype.set = wrapTestObject(function (value) {
            data = value;
        });
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(obj, 'property', argObj);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    } finally {
        delete Object.prototype.set;
    }
});
runTestCase(testcase);
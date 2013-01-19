wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    try {
        RegExp.prototype.set = wrapTestObject(function (value) {
            data = value;
        });
        var regObj = wrapTestObject(new RegExp());
        Object.defineProperty(obj, 'property', regObj);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    } finally {
        delete RegExp.prototype.set;
    }
});
runTestCase(testcase);
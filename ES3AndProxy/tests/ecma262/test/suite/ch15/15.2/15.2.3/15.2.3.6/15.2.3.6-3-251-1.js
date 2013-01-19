wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    try {
        Boolean.prototype.set = wrapTestObject(function (value) {
            data = value;
        });
        var boolObj = wrapTestObject(new Boolean(true));
        Object.defineProperty(obj, 'property', boolObj);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    } finally {
        delete Boolean.prototype.set;
    }
});
runTestCase(testcase);
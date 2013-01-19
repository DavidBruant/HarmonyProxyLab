wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        String.prototype.set = wrapTestObject(function (value) {
            data = value;
        });
        var strObj = wrapTestObject(new String());
        var data = 'data';
        Object.defineProperty(obj, 'property', strObj);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    } finally {
        delete String.prototype.set;
    }
});
runTestCase(testcase);
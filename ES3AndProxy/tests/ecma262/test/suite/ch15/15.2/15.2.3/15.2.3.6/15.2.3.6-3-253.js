wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    try {
        Math.set = wrapTestObject(function (value) {
            data = value;
        });
        Object.defineProperty(obj, 'property', Math);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    } finally {
        delete Math.set;
    }
});
runTestCase(testcase);
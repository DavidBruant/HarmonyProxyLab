wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    try {
        JSON.set = wrapTestObject(function (value) {
            data = value;
        });
        Object.defineProperty(obj, 'property', JSON);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    } finally {
        delete JSON.set;
    }
});
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        var dateObj = wrapTestObject(new Date());
        dateObj.set = wrapTestObject(function (value) {
            data = value;
        });
        Object.defineProperty(obj, 'property', dateObj);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    });
runTestCase(testcase);
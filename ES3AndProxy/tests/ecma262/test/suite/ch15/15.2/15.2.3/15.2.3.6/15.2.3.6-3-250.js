var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var strObj = wrapTestObject(new String());
        var data = 'data';
        strObj.set = wrapTestObject(function (value) {
            data = value;
        });
        Object.defineProperty(obj, 'property', strObj);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    });
runTestCase(testcase);
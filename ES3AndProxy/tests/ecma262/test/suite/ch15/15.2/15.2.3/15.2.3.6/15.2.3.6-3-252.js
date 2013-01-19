var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        var numObj = wrapTestObject(new Number(-2));
        numObj.set = wrapTestObject(function (value) {
            data = value;
        });
        Object.defineProperty(obj, 'property', numObj);
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    });
runTestCase(testcase);
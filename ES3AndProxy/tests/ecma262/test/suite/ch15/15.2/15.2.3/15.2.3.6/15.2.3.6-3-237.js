var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var data = 'data';
        Object.defineProperty(obj, 'property', wrapTestObject({
            set: wrapTestObject(function (value) {
                data = value;
            })
        }));
        obj.property = 'overrideData';
        return obj.hasOwnProperty('property') && data === 'overrideData';
    });
runTestCase(testcase);
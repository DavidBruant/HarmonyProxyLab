var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 11;
            })
        }));
        obj.property = 14;
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return obj.hasOwnProperty('property') && obj.property === 11 && typeof desc.set === 'undefined';
    });
runTestCase(testcase);
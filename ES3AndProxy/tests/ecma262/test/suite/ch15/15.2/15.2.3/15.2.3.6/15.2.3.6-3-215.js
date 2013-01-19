var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attributes = wrapTestObject({});
        Object.defineProperty(attributes, 'get', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        Object.defineProperty(obj, 'property', attributes);
        return typeof obj.property === 'undefined' && obj.hasOwnProperty('property');
    });
runTestCase(testcase);
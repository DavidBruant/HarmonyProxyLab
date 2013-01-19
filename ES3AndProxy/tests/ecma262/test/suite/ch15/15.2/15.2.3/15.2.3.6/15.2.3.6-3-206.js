var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        return typeof obj.property === 'undefined' && obj.hasOwnProperty('property');
    });
runTestCase(testcase);
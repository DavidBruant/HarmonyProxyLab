var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attr = wrapTestObject({});
        Object.defineProperty(attr, 'value', wrapTestObject({
            set: wrapTestObject(function () {
            })
        }));
        Object.defineProperty(obj, 'property', attr);
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);
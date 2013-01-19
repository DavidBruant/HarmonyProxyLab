var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ writable: NaN }) }));
        obj.property = 'isWritable';
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);
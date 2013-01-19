var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ writable: 'abc' }) }));
        obj.property = 'isWritable';
        return obj.property === 'isWritable';
    });
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ writable: wrapTestObject(new String('abc')) }) }));
        obj.property = 'isWritable';
        return obj.property === 'isWritable';
    });
runTestCase(testcase);
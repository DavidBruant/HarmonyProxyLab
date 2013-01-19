var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var str = wrapTestObject(new String('abc'));
        str.writable = false;
        Object.defineProperties(obj, wrapTestObject({ property: str }));
        obj.property = 'isWritable';
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);
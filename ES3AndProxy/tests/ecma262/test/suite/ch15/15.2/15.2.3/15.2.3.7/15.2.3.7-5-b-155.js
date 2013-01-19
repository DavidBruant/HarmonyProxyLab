var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var descObj = wrapTestObject(new Number(-9));
        descObj.writable = false;
        Object.defineProperties(obj, wrapTestObject({ property: descObj }));
        obj.property = 'isWritable';
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);
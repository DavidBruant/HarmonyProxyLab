var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var arr = wrapTestObject([
                1,
                2,
                3
            ]);
        arr.writable = false;
        Object.defineProperties(obj, wrapTestObject({ property: arr }));
        obj.property = 'isWritable';
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    });
runTestCase(testcase);
wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var func = wrapTestObject(function (a, b, c) {
            return arguments;
        });
    Object.defineProperties(obj, wrapTestObject({ property: wrapTestObject({ writable: func(1, true, 'a') }) }));
    obj.property = 'isWritable';
    return obj.property === 'isWritable';
});
runTestCase(testcase);
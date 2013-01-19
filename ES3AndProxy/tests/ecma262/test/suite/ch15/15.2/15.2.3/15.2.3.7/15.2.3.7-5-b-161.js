wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var func = wrapTestObject(function (a, b) {
            arguments.writable = false;
            Object.defineProperties(obj, wrapTestObject({ property: arguments }));
            obj.property = 'isWritable';
            return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
        });
    return func();
});
runTestCase(testcase);
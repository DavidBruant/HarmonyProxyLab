wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var func = wrapTestObject(function (a, b) {
            return a + b;
        });
    func.writable = false;
    Object.defineProperties(obj, wrapTestObject({ property: func }));
    obj.property = 'isWritable';
    return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
});
runTestCase(testcase);
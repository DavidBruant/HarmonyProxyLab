wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    try {
        Math.writable = false;
        Object.defineProperties(obj, wrapTestObject({ property: Math }));
        obj.property = 'isWritable';
        return obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
    } finally {
        delete Math.writable;
    }
});
runTestCase(testcase);
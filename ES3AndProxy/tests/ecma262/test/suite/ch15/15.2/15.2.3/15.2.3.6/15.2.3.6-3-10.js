wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var setter = 42;
    var desc = wrapTestObject({ set: setter });
    try {
        Object.defineProperty(o, 'foo', desc);
    } catch (e) {
        if (e instanceof TypeError && o.hasOwnProperty('foo') === false) {
            return true;
        }
    }
});
runTestCase(testcase);
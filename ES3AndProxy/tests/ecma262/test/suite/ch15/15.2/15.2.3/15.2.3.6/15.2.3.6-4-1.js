wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    Object.preventExtensions(o);
    try {
        var desc = wrapTestObject({ value: 1 });
        Object.defineProperty(o, 'foo', desc);
    } catch (e) {
        if (e instanceof TypeError && o.hasOwnProperty('foo') === false) {
            return true;
        }
    }
});
runTestCase(testcase);
wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var setter = wrapTestObject(function () {
        });
    var desc = wrapTestObject({
            set: setter,
            value: 101
        });
    try {
        Object.defineProperty(o, 'foo', desc);
    } catch (e) {
        if (e instanceof TypeError && o.hasOwnProperty('foo') === false) {
            return true;
        }
    }
});
runTestCase(testcase);
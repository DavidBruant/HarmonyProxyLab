wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var getter = wrapTestObject(function () {
            return 1;
        });
    var desc = wrapTestObject({
            get: getter,
            writable: false
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
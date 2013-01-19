wrapTestObject(function testcase() {
    var o = wrapTestObject({});
    var getter = true;
    var desc = wrapTestObject({ get: getter });
    try {
        Object.defineProperty(o, 'foo', desc);
    } catch (e) {
        if (e instanceof TypeError && o.hasOwnProperty('foo') === false) {
            return true;
        }
    }
});
runTestCase(testcase);
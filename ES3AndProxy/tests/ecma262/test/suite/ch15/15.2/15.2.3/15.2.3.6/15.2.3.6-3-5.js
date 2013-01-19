var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var getter = 42;
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
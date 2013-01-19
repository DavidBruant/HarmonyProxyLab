var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var setter = 'abc';
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
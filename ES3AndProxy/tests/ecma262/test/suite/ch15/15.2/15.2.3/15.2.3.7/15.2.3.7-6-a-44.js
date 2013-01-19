var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({ value: NaN });
        Object.defineProperty(obj, 'foo', desc);
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: NaN }) }));
        var verifyEnumerable = false;
        for (var p in obj) {
            if (p === 'foo') {
                verifyEnumerable = true;
            }
        }
        var verifyValue = false;
        obj.prop = 'overrideData';
        verifyValue = obj.foo !== obj.foo && isNaN(obj.foo);
        var verifyConfigurable = false;
        delete obj.foo;
        verifyConfigurable = obj.hasOwnProperty('foo');
        return verifyConfigurable && !verifyEnumerable && verifyValue;
    });
runTestCase(testcase);
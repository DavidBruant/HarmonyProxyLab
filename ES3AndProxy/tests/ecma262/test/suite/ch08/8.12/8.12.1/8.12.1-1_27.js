var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        Object.defineProperty(o, 'foo', wrapTestObject({
            get: wrapTestObject(function () {
                return 42;
            }),
            enumerable: true
        }));
        return o.hasOwnProperty('foo');
    });
runTestCase(testcase);
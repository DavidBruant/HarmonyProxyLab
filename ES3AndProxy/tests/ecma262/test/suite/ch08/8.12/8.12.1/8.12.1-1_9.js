var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        Object.defineProperty(o, 'foo', wrapTestObject({
            value: 42,
            writable: true,
            enumerable: true
        }));
        return o.hasOwnProperty('foo');
    });
runTestCase(testcase);
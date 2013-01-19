var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        Object.defineProperty(o, 'foo', wrapTestObject({
            set: wrapTestObject(function () {
                ;
            })
        }));
        return o.hasOwnProperty('foo');
    });
runTestCase(testcase);
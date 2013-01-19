var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var result = false;
        var Fun = wrapTestObject(function () {
                return arguments;
            });
        var props = wrapTestObject(new Fun());
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                result = '[object Arguments]' === Object.prototype.toString.call(this);
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        Object.defineProperties(obj, props);
        return result;
    });
runTestCase(testcase);
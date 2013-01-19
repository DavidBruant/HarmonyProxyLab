var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var props = wrapTestObject(new Error('test'));
        var obj1 = wrapTestObject({ value: 11 });
        props.description = obj1;
        props.message = obj1;
        props.name = obj1;
        var result = false;
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                result = this instanceof Error;
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        Object.defineProperties(obj, props);
        return result;
    });
runTestCase(testcase);
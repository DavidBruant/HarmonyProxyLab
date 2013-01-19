var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject({});
        Object.defineProperty(props, 'prop', wrapTestObject({
            value: wrapTestObject({}),
            enumerable: false
        }));
        var newObj = Object.create(wrapTestObject({}), props);
        return !newObj.hasOwnProperty('prop');
    });
runTestCase(testcase);
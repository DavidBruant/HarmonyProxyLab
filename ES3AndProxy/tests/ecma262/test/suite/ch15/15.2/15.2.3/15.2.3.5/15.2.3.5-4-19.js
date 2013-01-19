var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject({});
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        var newObj = Object.create(wrapTestObject({}), props);
        return newObj.hasOwnProperty('prop');
    });
runTestCase(testcase);
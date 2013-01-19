var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject(new RegExp());
        var result = false;
        Object.defineProperty(props, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                result = this instanceof RegExp;
                return wrapTestObject({});
            }),
            enumerable: true
        }));
        var newObj = Object.create(wrapTestObject({}), props);
        return result && newObj.hasOwnProperty('prop');
    });
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject(function () {
            });
        props.prop = wrapTestObject({
            value: 12,
            enumerable: true
        });
        var newObj = Object.create(wrapTestObject({}), props);
        return newObj.hasOwnProperty('prop');
    });
runTestCase(testcase);
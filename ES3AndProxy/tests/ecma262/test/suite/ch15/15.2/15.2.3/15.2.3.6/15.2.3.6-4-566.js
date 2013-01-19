var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function () {
                return 2010;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.hasOwnProperty('prop') && obj.prop === 2010 && desc.get === getFunc;
    });
runTestCase(testcase);
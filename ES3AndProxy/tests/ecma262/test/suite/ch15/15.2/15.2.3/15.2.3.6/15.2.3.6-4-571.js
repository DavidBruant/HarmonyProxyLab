var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ len: 2010 });
        var getFunc = wrapTestObject(function () {
                return this;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.hasOwnProperty('prop') && obj.prop === obj && desc.get === getFunc;
    });
runTestCase(testcase);
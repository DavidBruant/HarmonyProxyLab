var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var verifyExecute = false;
        var getFunc = wrapTestObject(function () {
                verifyExecute = true;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return obj.hasOwnProperty('prop') && desc.get === getFunc && typeof obj.prop === 'undefined' && verifyExecute;
    });
runTestCase(testcase);
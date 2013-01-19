var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        var getFunc = wrapTestObject(function getFunc() {
                return 20;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return desc1.hasOwnProperty('value') && desc2.hasOwnProperty('get');
    });
runTestCase(testcase);
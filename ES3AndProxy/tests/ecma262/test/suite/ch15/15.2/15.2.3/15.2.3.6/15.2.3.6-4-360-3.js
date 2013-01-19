var testcase = wrapTestObject(function testcase() {
        var obj = fnGlobalObject();
        try {
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
            return desc1.hasOwnProperty('value') && desc2.hasOwnProperty('get') && desc2.enumerable === true && desc2.configurable === true && obj.prop === 20 && typeof desc2.set === 'undefined' && desc2.get === getFunc;
        } finally {
            delete obj.prop;
        }
    });
runTestCase(testcase);
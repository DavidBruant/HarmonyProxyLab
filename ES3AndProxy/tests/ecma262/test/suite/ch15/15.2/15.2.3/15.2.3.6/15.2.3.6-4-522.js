var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function () {
                return 1001;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: getFunc,
            set: undefined,
            enumerable: false,
            configurable: false
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return propertyDefineCorrect && typeof desc.set === 'undefined';
    });
runTestCase(testcase);
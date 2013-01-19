var testcase = wrapTestObject(function testcase() {
        var obj = fnGlobalObject();
        try {
            obj.verifySetFunc = 'data';
            var getFunc = wrapTestObject(function () {
                    return obj.verifySetFunc;
                });
            Object.defineProperty(obj, 'prop', wrapTestObject({
                get: getFunc,
                enumerable: true,
                configurable: true
            }));
            obj.prop = 'overrideData';
            var propertyDefineCorrect = obj.hasOwnProperty('prop');
            var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
            return propertyDefineCorrect && typeof desc.set === 'undefined' && obj.prop === 'data';
        } finally {
            delete obj.prop;
            delete obj.verifySetFunc;
        }
    });
runTestCase(testcase);
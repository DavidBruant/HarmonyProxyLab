var testcase = wrapTestObject(function testcase() {
        var obj = fnGlobalObject();
        try {
            Object.defineProperty(obj, 'property', wrapTestObject({
                value: 1001,
                writable: false,
                configurable: true
            }));
            Object.defineProperty(obj, 'property', wrapTestObject({ value: 1002 }));
            return dataPropertyAttributesAreCorrect(obj, 'property', 1002, false, false, true);
        } finally {
            delete obj.property;
        }
    });
runTestCase(testcase);
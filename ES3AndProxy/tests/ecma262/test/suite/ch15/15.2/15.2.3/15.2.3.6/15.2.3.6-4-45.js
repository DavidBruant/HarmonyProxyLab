var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(fnGlobalObject(), 'foo', wrapTestObject({
                value: 12,
                configurable: true
            }));
            return dataPropertyAttributesAreCorrect(fnGlobalObject(), 'foo', 12, false, false, true);
        } finally {
            delete fnGlobalObject().foo;
        }
    });
runTestCase(testcase);
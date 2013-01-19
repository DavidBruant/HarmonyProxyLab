var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(JSON, 'foo', wrapTestObject({
                value: 12,
                configurable: true
            }));
            return dataPropertyAttributesAreCorrect(JSON, 'foo', 12, false, false, true);
        } finally {
            delete JSON.foo;
        }
    });
runTestCase(testcase);
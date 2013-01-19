var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Math, 'foo', wrapTestObject({
                value: 12,
                configurable: true
            }));
            return dataPropertyAttributesAreCorrect(Math, 'foo', 12, false, false, true);
        } finally {
            delete Math.foo;
        }
    });
runTestCase(testcase);
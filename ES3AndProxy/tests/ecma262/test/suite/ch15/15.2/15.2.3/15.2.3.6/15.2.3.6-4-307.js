var testcase = wrapTestObject(function testcase() {
        return wrapTestObject(function () {
            Object.defineProperty(arguments, '0', wrapTestObject({
                value: 0,
                writable: false,
                enumerable: true,
                configurable: false
            }));
            try {
                Object.defineProperty(arguments, '0', wrapTestObject({ enumerable: false }));
            } catch (e) {
                return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, '0', 0, false, true, false);
            }
            return false;
        })();
    });
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        Object.defineProperty(arrObj, '1', wrapTestObject({
            value: 1,
            configurable: false
        }));
        try {
            Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 1 }));
            return false;
        } catch (e) {
            var desc = Object.getOwnPropertyDescriptor(arrObj, 'length');
            return Object.hasOwnProperty.call(arrObj, 'length') && desc.value === 2 && desc.writable === true && desc.configurable === false && desc.enumerable === false;
        }
    });
runTestCase(testcase);
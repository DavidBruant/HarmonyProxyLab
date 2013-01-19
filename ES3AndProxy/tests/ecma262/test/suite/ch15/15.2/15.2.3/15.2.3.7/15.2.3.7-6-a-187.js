var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Array.prototype, '0', wrapTestObject({
                value: 11,
                configurable: true
            }));
            var arr = wrapTestObject([]);
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ configurable: false }) }));
            return arr.hasOwnProperty('0') && typeof arr[0] === 'undefined' && Array.prototype[0] === 11;
        } finally {
            delete Array.prototype[0];
        }
    });
runTestCase(testcase);
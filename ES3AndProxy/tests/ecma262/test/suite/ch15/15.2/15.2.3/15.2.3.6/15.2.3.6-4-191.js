var testcase = wrapTestObject(function testcase() {
        try {
            Object.defineProperty(Array.prototype, '0', wrapTestObject({
                value: 11,
                configurable: true
            }));
            var arrObj = wrapTestObject([]);
            Object.defineProperty(arrObj, '0', wrapTestObject({ configurable: false }));
            return arrObj.hasOwnProperty('0') && Array.prototype[0] === 11 && typeof arrObj[0] === 'undefined';
        } finally {
            delete Array.prototype[0];
        }
    });
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        try {
            Array.prototype[1] = 2;
            Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 1 }));
            return arrObj.length === 1 && !arrObj.hasOwnProperty('1');
        } finally {
            delete Array.prototype[1];
        }
    });
runTestCase(testcase);
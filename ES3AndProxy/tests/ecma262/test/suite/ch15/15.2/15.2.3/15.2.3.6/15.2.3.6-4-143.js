var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({ value: '0x00B' }));
        return arrObj.length === 11;
    });
runTestCase(testcase);
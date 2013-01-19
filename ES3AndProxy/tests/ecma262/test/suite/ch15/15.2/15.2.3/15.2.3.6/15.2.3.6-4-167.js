var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        Object.defineProperty(arrObj, 'length', wrapTestObject({
            value: 1,
            writable: false
        }));
        var indexDeleted = !arrObj.hasOwnProperty('1');
        arrObj.length = 10;
        return indexDeleted && arrObj.length === 1;
    });
runTestCase(testcase);
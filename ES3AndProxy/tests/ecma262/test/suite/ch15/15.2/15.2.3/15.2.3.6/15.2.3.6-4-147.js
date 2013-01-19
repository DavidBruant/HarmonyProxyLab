wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({
        value: wrapTestObject({
            valueOf: wrapTestObject(function () {
                return 2;
            })
        })
    }));
    return arrObj.length === 2;
});
runTestCase(testcase);
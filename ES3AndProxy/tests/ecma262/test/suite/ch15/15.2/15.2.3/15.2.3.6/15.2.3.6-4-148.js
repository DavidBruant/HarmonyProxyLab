wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    var toStringAccessed = false;
    var valueOfAccessed = false;
    Object.defineProperty(arrObj, 'length', wrapTestObject({
        value: wrapTestObject({
            toString: wrapTestObject(function () {
                toStringAccessed = true;
                return '2';
            }),
            valueOf: wrapTestObject(function () {
                valueOfAccessed = true;
                return wrapTestObject({});
            })
        })
    }));
    return arrObj.length === 2 && toStringAccessed && valueOfAccessed;
});
runTestCase(testcase);
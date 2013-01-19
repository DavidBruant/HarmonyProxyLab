wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    try {
        Object.defineProperties(arr, wrapTestObject({
            length: wrapTestObject({
                get: wrapTestObject(function () {
                    return 2;
                })
            })
        }));
        return false;
    } catch (e) {
        return e instanceof TypeError && arr.length === 0;
    }
});
runTestCase(testcase);
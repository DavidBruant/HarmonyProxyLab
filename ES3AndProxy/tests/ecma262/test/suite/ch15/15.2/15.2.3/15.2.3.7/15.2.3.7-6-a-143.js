wrapTestObject(function testcase() {
    var arr = wrapTestObject([]);
    Object.defineProperties(arr, wrapTestObject({
        length: wrapTestObject({
            value: wrapTestObject({
                valueOf: wrapTestObject(function () {
                    return 2;
                })
            })
        })
    }));
    return arr.length === 2;
});
runTestCase(testcase);
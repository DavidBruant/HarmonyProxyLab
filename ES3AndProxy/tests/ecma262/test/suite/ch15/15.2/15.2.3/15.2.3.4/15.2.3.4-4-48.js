wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1,
            2
        ]);
    Object.defineProperty(arr, 'ownProperty', wrapTestObject({
        get: wrapTestObject(function () {
            return 'ownArray';
        }),
        configurable: true
    }));
    var result = Object.getOwnPropertyNames(arr);
    for (var p in result) {
        if (result[p] === 'ownProperty') {
            return true;
        }
    }
    return false;
});
runTestCase(testcase);
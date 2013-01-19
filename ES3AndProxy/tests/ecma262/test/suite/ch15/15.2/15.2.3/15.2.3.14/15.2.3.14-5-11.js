wrapTestObject(function testcase() {
    var obj = wrapTestObject([
            1,
            2,
            3,
            4,
            5
        ]);
    var arr = Object.keys(obj);
    var initValue = 0;
    for (var p in arr) {
        if (arr.hasOwnProperty(p)) {
            if (arr[p] !== initValue.toString()) {
                return false;
            }
            initValue++;
        }
    }
    return true;
});
runTestCase(testcase);
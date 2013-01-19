wrapTestObject(function testcase() {
    var str = wrapTestObject(new String('abc'));
    var tempArray = wrapTestObject([]);
    for (var p in str) {
        if (str.hasOwnProperty(p)) {
            tempArray.push(p);
        }
    }
    var returnedArray = Object.keys(str);
    for (var index in returnedArray) {
        if (tempArray[index] !== returnedArray[index]) {
            return false;
        }
    }
    return true;
});
runTestCase(testcase);
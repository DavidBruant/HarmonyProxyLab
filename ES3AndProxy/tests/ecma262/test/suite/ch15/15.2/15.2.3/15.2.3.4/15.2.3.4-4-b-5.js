wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'a': 'a' });
    var result = Object.getOwnPropertyNames(obj);
    for (var p in result) {
        if (result[p] === 'a') {
            return true;
        }
    }
    return false;
});
runTestCase(testcase);
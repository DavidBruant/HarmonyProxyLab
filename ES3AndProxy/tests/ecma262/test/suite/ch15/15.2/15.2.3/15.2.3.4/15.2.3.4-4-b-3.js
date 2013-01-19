wrapTestObject(function testcase() {
    var obj = wrapTestObject({ '': 'empty' });
    var result = Object.getOwnPropertyNames(obj);
    for (var p in result) {
        if (result[p] === '') {
            return true;
        }
    }
    return false;
});
runTestCase(testcase);
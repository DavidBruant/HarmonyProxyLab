wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'a': 'a' });
    var result = Object.getOwnPropertyNames(obj);
    try {
        var beforeOverride = result[0] === 'a';
        result[0] = 'b';
        var afterOverride = result[0] === 'b';
        return beforeOverride && afterOverride;
    } catch (ex) {
        return false;
    }
});
runTestCase(testcase);
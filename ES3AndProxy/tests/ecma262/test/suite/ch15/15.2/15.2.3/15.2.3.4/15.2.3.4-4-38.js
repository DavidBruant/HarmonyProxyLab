wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'a': 'a' });
    var result = Object.getOwnPropertyNames(obj);
    return result[0] === 'a';
});
runTestCase(testcase);
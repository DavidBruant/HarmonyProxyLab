wrapTestObject(function testcase() {
    var obj = wrapTestObject({ 'a': 'a' });
    var result = Object.getOwnPropertyNames(obj);
    var beforeDeleted = result.hasOwnProperty('0');
    delete result[0];
    var afterDeleted = result.hasOwnProperty('0');
    return beforeDeleted && !afterDeleted;
});
runTestCase(testcase);
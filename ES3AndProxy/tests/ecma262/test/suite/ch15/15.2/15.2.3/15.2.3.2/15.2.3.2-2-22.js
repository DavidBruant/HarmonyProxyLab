wrapTestObject(function testcase() {
    var obj = wrapTestObject(new String('abc'));
    return Object.getPrototypeOf(obj) === String.prototype;
});
runTestCase(testcase);
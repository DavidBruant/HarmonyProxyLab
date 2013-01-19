wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}));
    return newObj instanceof Object;
});
runTestCase(testcase);
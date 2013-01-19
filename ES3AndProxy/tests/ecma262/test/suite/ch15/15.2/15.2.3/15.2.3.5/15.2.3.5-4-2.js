wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), undefined);
    return newObj instanceof Object;
});
runTestCase(testcase);
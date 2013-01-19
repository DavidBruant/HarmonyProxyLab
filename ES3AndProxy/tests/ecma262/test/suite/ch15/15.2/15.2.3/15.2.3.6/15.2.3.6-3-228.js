wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.get = wrapTestObject(function () {
        return 'argumentGetProperty';
    });
    Object.defineProperty(obj, 'property', argObj);
    return obj.property === 'argumentGetProperty';
});
runTestCase(testcase);
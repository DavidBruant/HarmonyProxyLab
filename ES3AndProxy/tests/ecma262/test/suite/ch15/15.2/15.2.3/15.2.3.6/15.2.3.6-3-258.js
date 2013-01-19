wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var data = 'data';
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.set = wrapTestObject(function (value) {
        data = value;
    });
    Object.defineProperty(obj, 'property', argObj);
    obj.property = 'overrideData';
    return obj.hasOwnProperty('property') && data === 'overrideData';
});
runTestCase(testcase);
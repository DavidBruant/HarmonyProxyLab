wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.configurable = true;
    Object.defineProperty(obj, 'property', argObj);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);
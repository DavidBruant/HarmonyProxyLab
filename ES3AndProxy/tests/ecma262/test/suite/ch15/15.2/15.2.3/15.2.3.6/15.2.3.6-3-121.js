wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var argObj = wrapTestObject(function () {
            return arguments;
        })(1, true, 'a');
    var attr = wrapTestObject({ configurable: argObj });
    Object.defineProperty(obj, 'property', attr);
    var beforeDeleted = obj.hasOwnProperty('property');
    delete obj.property;
    var afterDeleted = obj.hasOwnProperty('property');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);
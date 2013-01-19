wrapTestObject(function testcase() {
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ configurable: argObj }) }));
    var beforeDeleted = newObj.hasOwnProperty('prop');
    delete newObj.prop;
    var afterDeleted = newObj.hasOwnProperty('prop');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);
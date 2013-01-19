wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ configurable: '' }) }));
    var beforeDeleted = newObj.hasOwnProperty('prop');
    delete newObj.prop;
    var afterDeleted = newObj.hasOwnProperty('prop');
    return beforeDeleted === true && afterDeleted === true;
});
runTestCase(testcase);
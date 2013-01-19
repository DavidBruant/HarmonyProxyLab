wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ configurable: 'false' }) }));
    var beforeDeleted = newObj.hasOwnProperty('prop');
    delete newObj.prop;
    var afterDeleted = newObj.hasOwnProperty('prop');
    return beforeDeleted === true && afterDeleted === false;
});
runTestCase(testcase);
wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ configurable: true }) }));
    var result1 = newObj.hasOwnProperty('prop');
    delete newObj.prop;
    var result2 = newObj.hasOwnProperty('prop');
    return result1 === true && result2 === false;
});
runTestCase(testcase);
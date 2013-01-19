var testcase = wrapTestObject(function testcase() {
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ configurable: wrapTestObject(new Number(123)) }) }));
        var beforeDeleted = newObj.hasOwnProperty('prop');
        delete newObj.prop;
        var afterDeleted = newObj.hasOwnProperty('prop');
        return beforeDeleted === true && afterDeleted === false;
    });
runTestCase(testcase);
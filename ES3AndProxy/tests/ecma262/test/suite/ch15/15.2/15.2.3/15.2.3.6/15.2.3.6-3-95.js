var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var errObj = wrapTestObject(new Error());
        errObj.configurable = true;
        Object.defineProperty(obj, 'property', errObj);
        var beforeDeleted = obj.hasOwnProperty('property');
        delete obj.property;
        var afterDeleted = obj.hasOwnProperty('property');
        return beforeDeleted === true && afterDeleted === false;
    });
runTestCase(testcase);
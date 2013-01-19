var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var arrObj = wrapTestObject([
                1,
                2,
                3
            ]);
        arrObj.configurable = true;
        Object.defineProperty(obj, 'property', arrObj);
        var beforeDeleted = obj.hasOwnProperty('property');
        delete obj.property;
        var afterDeleted = obj.hasOwnProperty('property');
        return beforeDeleted === true && afterDeleted === false;
    });
runTestCase(testcase);
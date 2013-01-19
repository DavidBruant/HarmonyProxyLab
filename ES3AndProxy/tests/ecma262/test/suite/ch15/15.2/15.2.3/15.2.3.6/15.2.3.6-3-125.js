var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attr = wrapTestObject({ configurable: wrapTestObject(new Boolean(false)) });
        Object.defineProperty(obj, 'property', attr);
        var beforeDeleted = obj.hasOwnProperty('property');
        delete obj.property;
        var afterDeleted = obj.hasOwnProperty('property');
        return beforeDeleted === true && afterDeleted === false;
    });
runTestCase(testcase);
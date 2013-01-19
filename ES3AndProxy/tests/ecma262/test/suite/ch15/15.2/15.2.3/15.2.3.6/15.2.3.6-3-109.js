var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({ configurable: '' }));
        var beforeDeleted = obj.hasOwnProperty('property');
        delete obj.property;
        var afterDeleted = obj.hasOwnProperty('property') && typeof obj.property === 'undefined';
        return beforeDeleted === true && afterDeleted === true;
    });
runTestCase(testcase);
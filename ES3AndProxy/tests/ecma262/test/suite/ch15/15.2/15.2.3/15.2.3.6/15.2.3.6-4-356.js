var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        }));
        var beforeDelete = obj.hasOwnProperty('prop');
        delete obj.prop;
        var afterDelete = obj.hasOwnProperty('prop');
        return beforeDelete && !afterDelete;
    });
runTestCase(testcase);
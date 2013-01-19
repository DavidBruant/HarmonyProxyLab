var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            String.prototype.configurable = true;
            var strObj = wrapTestObject(new String('abc'));
            Object.defineProperty(obj, 'property', strObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete String.prototype.configurable;
        }
    });
runTestCase(testcase);
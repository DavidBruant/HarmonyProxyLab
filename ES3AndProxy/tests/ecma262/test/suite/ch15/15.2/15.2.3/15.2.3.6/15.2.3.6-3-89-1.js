var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Boolean.prototype.configurable = true;
            var boolObj = wrapTestObject(new Boolean(true));
            Object.defineProperty(obj, 'property', boolObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Boolean.prototype.configurable;
        }
    });
runTestCase(testcase);
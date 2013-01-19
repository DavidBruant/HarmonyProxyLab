var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Date.prototype.configurable = true;
            var dateObj = wrapTestObject(new Date());
            Object.defineProperty(obj, 'property', dateObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Date.prototype.configurable;
        }
    });
runTestCase(testcase);
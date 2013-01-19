var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            RegExp.prototype.configurable = true;
            var regObj = wrapTestObject(new RegExp());
            Object.defineProperty(obj, 'property', regObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete RegExp.prototype.configurable;
        }
    });
runTestCase(testcase);
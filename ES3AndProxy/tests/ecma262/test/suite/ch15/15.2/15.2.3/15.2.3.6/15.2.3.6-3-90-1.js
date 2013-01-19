var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Number.prototype.configurable = true;
            var numObj = wrapTestObject(new Number(-2));
            Object.defineProperty(obj, 'property', numObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Number.prototype.configurable;
        }
    });
runTestCase(testcase);
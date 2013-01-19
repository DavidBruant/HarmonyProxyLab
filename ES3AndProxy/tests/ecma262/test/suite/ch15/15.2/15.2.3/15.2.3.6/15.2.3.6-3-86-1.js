var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Function.prototype.configurable = true;
            var funObj = wrapTestObject(function (a, b) {
                    return a + b;
                });
            Object.defineProperty(obj, 'property', funObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Function.prototype.configurable;
        }
    });
runTestCase(testcase);
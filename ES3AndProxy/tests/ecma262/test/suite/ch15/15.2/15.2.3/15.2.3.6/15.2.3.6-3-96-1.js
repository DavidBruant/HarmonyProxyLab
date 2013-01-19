var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Object.prototype.configurable = true;
            var argObj = wrapTestObject(function () {
                    return arguments;
                })();
            Object.defineProperty(obj, 'property', argObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Object.prototype.configurable;
        }
    });
runTestCase(testcase);
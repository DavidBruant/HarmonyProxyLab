var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Array.prototype.configurable = true;
            var arrObj = wrapTestObject([
                    1,
                    2,
                    3
                ]);
            Object.defineProperty(obj, 'property', arrObj);
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Array.prototype.configurable;
        }
    });
runTestCase(testcase);
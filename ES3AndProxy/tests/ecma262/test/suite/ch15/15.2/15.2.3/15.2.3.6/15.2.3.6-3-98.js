var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            fnGlobalObject().configurable = true;
            Object.defineProperty(obj, 'property', fnGlobalObject());
            var beforeDeleted = obj.hasOwnProperty('property');
            delete obj.property;
            var afterDeleted = obj.hasOwnProperty('property');
            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete fnGlobalObject().configurable;
        }
    });
runTestCase(testcase);
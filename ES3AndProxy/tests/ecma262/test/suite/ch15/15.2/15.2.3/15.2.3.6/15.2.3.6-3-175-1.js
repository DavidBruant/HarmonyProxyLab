var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Object.prototype.writable = true;
            var argObj = wrapTestObject(function () {
                    return arguments;
                })();
            Object.defineProperty(obj, 'property', argObj);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Object.prototype.writable;
        }
    });
runTestCase(testcase);
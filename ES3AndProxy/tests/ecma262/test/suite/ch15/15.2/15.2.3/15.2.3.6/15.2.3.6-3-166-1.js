var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Array.prototype.writable = true;
            var arrObj = wrapTestObject([
                    1,
                    2,
                    3
                ]);
            Object.defineProperty(obj, 'property', arrObj);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Array.prototype.writable;
        }
    });
runTestCase(testcase);
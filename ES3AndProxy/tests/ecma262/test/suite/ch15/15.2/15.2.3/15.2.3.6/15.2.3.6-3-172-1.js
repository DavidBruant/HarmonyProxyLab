var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            RegExp.prototype.writable = true;
            var regObj = wrapTestObject(new RegExp());
            Object.defineProperty(obj, 'property', regObj);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete RegExp.prototype.writable;
        }
    });
runTestCase(testcase);
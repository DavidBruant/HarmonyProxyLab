var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        try {
            Number.prototype.writable = true;
            var numObj = wrapTestObject(new Number(-2));
            Object.defineProperty(obj, 'property', numObj);
            var beforeWrite = obj.hasOwnProperty('property');
            obj.property = 'isWritable';
            var afterWrite = obj.property === 'isWritable';
            return beforeWrite === true && afterWrite === true;
        } finally {
            delete Number.prototype.writable;
        }
    });
runTestCase(testcase);
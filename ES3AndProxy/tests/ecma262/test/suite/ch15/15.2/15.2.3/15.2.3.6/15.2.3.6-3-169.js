var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var numObj = wrapTestObject(new Number(-2));
        numObj.writable = true;
        Object.defineProperty(obj, 'property', numObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);
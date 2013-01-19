var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        argObj.writable = true;
        Object.defineProperty(obj, 'property', argObj);
        var beforeWrite = obj.hasOwnProperty('property');
        obj.property = 'isWritable';
        var afterWrite = obj.property === 'isWritable';
        return beforeWrite === true && afterWrite === true;
    });
runTestCase(testcase);
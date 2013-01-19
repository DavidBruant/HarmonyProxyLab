var testcase = wrapTestObject(function testcase() {
        var dateObj = wrapTestObject(new Date());
        var preCheck = Object.isExtensible(dateObj);
        Object.preventExtensions(dateObj);
        dateObj[0] = 12;
        return preCheck && !dateObj.hasOwnProperty('0');
    });
runTestCase(testcase);
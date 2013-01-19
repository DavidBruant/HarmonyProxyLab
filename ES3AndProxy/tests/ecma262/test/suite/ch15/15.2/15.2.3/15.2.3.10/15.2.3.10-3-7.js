var testcase = wrapTestObject(function testcase() {
        var numObj = wrapTestObject(new Number(123));
        var preCheck = Object.isExtensible(numObj);
        Object.preventExtensions(numObj);
        numObj[0] = 12;
        return preCheck && !numObj.hasOwnProperty('0');
    });
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        o['foo'] = 101;
        var desc = Object.getOwnPropertyDescriptor(o, 'foo');
        if (desc.value === 101 && desc.enumerable === true && desc.writable === true && desc.configurable === true && !desc.hasOwnProperty('get') && !desc.hasOwnProperty('set')) {
            return true;
        }
    });
runTestCase(testcase);
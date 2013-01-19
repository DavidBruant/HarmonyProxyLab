var testcase = wrapTestObject(function testcase() {
        var s = wrapTestObject(new String('abc'));
        var desc = Object.getOwnPropertyDescriptor(s, 'length');
        if (desc.writable === false && desc.enumerable === false && desc.configurable === false && desc.hasOwnProperty('get') === false && desc.hasOwnProperty('set') === false) {
            return true;
        }
    });
runTestCase(testcase);
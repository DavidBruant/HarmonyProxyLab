var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var desc = wrapTestObject({ value: 1 });
        Object.defineProperty(o, 'foo', desc);
        var propDesc = Object.getOwnPropertyDescriptor(o, 'foo');
        if (propDesc.value === 1 && propDesc.writable === false && propDesc.enumerable === false && propDesc.configurable === false) {
            return true;
        }
    });
runTestCase(testcase);
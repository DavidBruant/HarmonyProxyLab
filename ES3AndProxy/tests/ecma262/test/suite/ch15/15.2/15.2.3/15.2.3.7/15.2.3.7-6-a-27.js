var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ writable: true }) }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return desc.hasOwnProperty('value') && typeof desc.value === 'undefined' && desc.hasOwnProperty('writable') && desc.writable === true && desc.hasOwnProperty('configurable') && desc.configurable === false && desc.hasOwnProperty('enumerable') && desc.enumerable === false;
    });
runTestCase(testcase);
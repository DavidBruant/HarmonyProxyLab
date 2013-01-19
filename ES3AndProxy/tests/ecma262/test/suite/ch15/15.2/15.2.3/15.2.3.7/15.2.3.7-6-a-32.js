var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({}) }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return desc.hasOwnProperty('value') && typeof desc.value === 'undefined' && desc.hasOwnProperty('writable') && desc.writable === false && desc.hasOwnProperty('configurable') && desc.configurable === false && desc.hasOwnProperty('enumerable') && desc.enumerable === false && !desc.hasOwnProperty('get') && !desc.hasOwnProperty('set');
    });
runTestCase(testcase);
wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperties(obj, wrapTestObject({
        prop: wrapTestObject({
            configurable: true,
            enumerable: true
        })
    }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return desc.hasOwnProperty('value') && typeof desc.value === 'undefined' && desc.hasOwnProperty('writable') && desc.writable === false && desc.hasOwnProperty('configurable') && desc.configurable === true && desc.hasOwnProperty('enumerable') && desc.enumerable === true && !desc.hasOwnProperty('get') && !desc.hasOwnProperty('set');
});
runTestCase(testcase);
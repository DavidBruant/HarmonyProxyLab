wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({
        value: 2010,
        writable: false,
        enumerable: false,
        configurable: true
    }));
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    Object.defineProperty(obj, 'prop', wrapTestObject({ writable: true }));
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    return propertyDefineCorrect && desc1.writable === false && obj.prop === 2010 && desc2.writable === true;
});
runTestCase(testcase);
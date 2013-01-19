wrapTestObject(function testcase() {
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'set', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    var hasProperty = newObj.hasOwnProperty('prop');
    var desc = Object.getOwnPropertyDescriptor(newObj, 'prop');
    return hasProperty && typeof desc.set === 'undefined';
});
runTestCase(testcase);
wrapTestObject(function testcase() {
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({
            prop: wrapTestObject({
                get: wrapTestObject(function () {
                    return 'verifyCreate';
                }),
                enumerable: true,
                configurable: true
            })
        }));
    var desc = Object.getOwnPropertyDescriptor(newObj, 'prop');
    var verifySet = desc.hasOwnProperty('set') && typeof desc.set === 'undefined';
    var verifyGet = false;
    if (newObj.prop === 'verifyCreate') {
        verifyGet = true;
    }
    var verifyEnumerable = false;
    for (var p in newObj) {
        if (p === 'prop') {
            verifyEnumerable = true;
        }
    }
    var verifyConfigurable = false;
    var hasProperty = newObj.hasOwnProperty('prop');
    delete newObj.prop;
    verifyConfigurable = !newObj.hasOwnProperty('prop') && hasProperty;
    return verifySet && verifyGet && verifyEnumerable && verifyConfigurable;
});
runTestCase(testcase);
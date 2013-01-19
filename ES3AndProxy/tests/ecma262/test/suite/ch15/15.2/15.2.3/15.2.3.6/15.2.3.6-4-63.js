wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({ value: NaN }));
    Object.defineProperty(obj, 'foo', wrapTestObject({ value: NaN }));
    if (!isNaN(obj.foo)) {
        return false;
    }
    obj.foo = 'verifyValue';
    if (obj.foo === 'verifyValue') {
        return false;
    }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && prop === 'foo') {
            return false;
        }
    }
    delete obj.foo;
    if (!obj.hasOwnProperty('foo')) {
        return false;
    }
    return true;
});
runTestCase(testcase);
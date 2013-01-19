wrapTestObject(function testcase() {
    var newObj = wrapTestObject({});
    var props = wrapTestObject({});
    var i = 0;
    Object.defineProperty(props, 'prop1', wrapTestObject({
        get: wrapTestObject(function () {
            i++;
            return wrapTestObject({});
        }),
        enumerable: true
    }));
    Object.defineProperty(props, 'prop2', wrapTestObject({
        get: wrapTestObject(function () {
            if (1 === i++) {
                throw wrapTestObject(new RangeError());
            } else {
                return wrapTestObject({});
            }
        }),
        enumerable: true
    }));
    try {
        newObj = Object.create(wrapTestObject({}), props);
        return false;
    } catch (e) {
        return e instanceof RangeError && !newObj.hasOwnProperty('prop1') && i === 2;
    }
});
runTestCase(testcase);
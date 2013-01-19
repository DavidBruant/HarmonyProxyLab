wrapTestObject(function testcase() {
    var result = false;
    Object.defineProperty(Math, 'prop', wrapTestObject({
        get: wrapTestObject(function () {
            result = this === Math;
            return wrapTestObject({});
        }),
        enumerable: true,
        configurable: true
    }));
    try {
        var newObj = Object.create(wrapTestObject({}), Math);
        return result && newObj.hasOwnProperty('prop');
    } finally {
        delete Math.prop;
    }
});
runTestCase(testcase);
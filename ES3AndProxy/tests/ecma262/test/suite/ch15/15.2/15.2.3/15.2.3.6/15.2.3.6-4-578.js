wrapTestObject(function testcase() {
    var data = 'data';
    try {
        Object.defineProperty(String.prototype, 'prop', wrapTestObject({
            get: wrapTestObject(function () {
                return data;
            }),
            set: wrapTestObject(function (value) {
                data = value;
            }),
            enumerable: true,
            configurable: true
        }));
        var strObj = wrapTestObject(new String());
        return !strObj.hasOwnProperty('prop') && strObj.prop === 'data';
    } finally {
        delete String.prototype.prop;
    }
});
runTestCase(testcase);
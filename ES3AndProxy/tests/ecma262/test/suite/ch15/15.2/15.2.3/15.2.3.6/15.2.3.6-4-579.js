var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        try {
            Object.defineProperty(Array.prototype, 'prop', wrapTestObject({
                get: wrapTestObject(function () {
                    return data;
                }),
                set: wrapTestObject(function (value) {
                    data = value;
                }),
                enumerable: true,
                configurable: true
            }));
            var arrObj = wrapTestObject([]);
            arrObj.prop = 'myOwnProperty';
            return !arrObj.hasOwnProperty('prop') && arrObj.prop === 'myOwnProperty' && data === 'myOwnProperty';
        } finally {
            delete Array.prototype.prop;
        }
    });
runTestCase(testcase);
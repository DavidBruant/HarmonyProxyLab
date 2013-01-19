var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: wrapTestObject(function () {
                return 'property';
            }),
            enumerable: false,
            configurable: false
        }));
        if (obj.property !== 'property') {
            return false;
        }
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        if (typeof desc.set !== 'undefined') {
            return false;
        }
        for (var p in obj) {
            if (p === 'property') {
                return false;
            }
        }
        delete obj.property;
        if (!obj.hasOwnProperty('property')) {
            return false;
        }
        return true;
    });
runTestCase(testcase);
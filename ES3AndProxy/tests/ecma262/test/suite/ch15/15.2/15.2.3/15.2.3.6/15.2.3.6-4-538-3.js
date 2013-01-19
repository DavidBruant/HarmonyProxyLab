wrapTestObject(function testcase() {
    var obj = fnGlobalObject();
    obj.verifySetFunc = 'data';
    var getFunc = wrapTestObject(function () {
            return obj.verifySetFunc;
        });
    var setFunc = wrapTestObject(function (value) {
            obj.verifySetFunc = value;
        });
    try {
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1001 }));
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return desc1.hasOwnProperty('get') && desc2.hasOwnProperty('value') && typeof desc2.get === 'undefined' && typeof desc2.get === 'undefined' && dataPropertyAttributesAreCorrect(obj, 'prop', 1001, false, true, true);
    } finally {
        delete obj.prop;
        delete obj.verifySetFunc;
    }
});
runTestCase(testcase);
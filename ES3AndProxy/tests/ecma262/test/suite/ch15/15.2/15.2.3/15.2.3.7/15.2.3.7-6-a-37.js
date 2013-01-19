wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var getFun = wrapTestObject(function () {
            return 10;
        });
    var setFun = wrapTestObject(function (value) {
            obj.setVerifyHelpProp = value;
        });
    Object.defineProperties(obj, wrapTestObject({
        prop: wrapTestObject({
            get: getFun,
            set: setFun,
            enumerable: false,
            configurable: false
        })
    }));
    return accessorPropertyAttributesAreCorrect(obj, 'prop', getFun, setFun, 'setVerifyHelpProp', false, false);
});
runTestCase(testcase);
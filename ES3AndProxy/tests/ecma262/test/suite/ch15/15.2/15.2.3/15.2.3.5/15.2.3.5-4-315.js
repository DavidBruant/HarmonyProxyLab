var testcase = wrapTestObject(function testcase() {
        var newObj = wrapTestObject({});
        var getFunc = wrapTestObject(function getFunc() {
                return 10;
            });
        var setFunc = wrapTestObject(function setFunc(value) {
                newObj.setVerifyHelpProp = value;
            });
        newObj = Object.create(wrapTestObject({}), wrapTestObject({
            foo1: wrapTestObject({
                value: 200,
                enumerable: true,
                writable: true,
                configurable: true
            }),
            foo2: wrapTestObject({
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            })
        }));
        return dataPropertyAttributesAreCorrect(newObj, 'foo1', 200, true, true, true) && accessorPropertyAttributesAreCorrect(newObj, 'foo2', getFunc, setFunc, 'setVerifyHelpProp', true, true);
    });
runTestCase(testcase);
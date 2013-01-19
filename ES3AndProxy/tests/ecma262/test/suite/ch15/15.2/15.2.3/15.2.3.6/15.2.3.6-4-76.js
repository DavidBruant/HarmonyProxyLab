var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc1 = wrapTestObject(function getFunc1() {
                return 10;
            });
        var setFunc1 = wrapTestObject(function setFunc1(value) {
                obj.helpVerifySet = value;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: getFunc1,
            set: setFunc1,
            configurable: true
        }));
        var getFunc2 = wrapTestObject(function getFunc2() {
                return 20;
            });
        Object.defineProperty(obj, 'foo', wrapTestObject({ get: getFunc2 }));
        return accessorPropertyAttributesAreCorrect(obj, 'foo', getFunc2, setFunc1, 'helpVerifySet', false, true);
    });
runTestCase(testcase);
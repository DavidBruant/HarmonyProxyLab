var testcase = wrapTestObject(function testcase() {
        var str = wrapTestObject(new String('abc'));
        Object.defineProperty(str, 'ownProperty', wrapTestObject({
            get: wrapTestObject(function () {
                return 'ownString';
            }),
            configurable: true
        }));
        var result = Object.getOwnPropertyNames(str);
        for (var p in result) {
            if (result[p] === 'ownProperty') {
                return true;
            }
        }
        return false;
    });
runTestCase(testcase);
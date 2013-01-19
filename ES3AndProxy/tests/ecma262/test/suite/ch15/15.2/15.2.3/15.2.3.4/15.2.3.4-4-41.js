wrapTestObject(function testcase() {
    try {
        var str = wrapTestObject(new String('abc'));
        Object.defineProperty(String.prototype, 'protoProperty', wrapTestObject({
            get: wrapTestObject(function () {
                return 'protoString';
            }),
            configurable: true
        }));
        var result = Object.getOwnPropertyNames(str);
        for (var p in result) {
            if (result[p] === 'protoProperty') {
                return false;
            }
        }
        return true;
    } finally {
        delete String.prototype.protoProperty;
    }
});
runTestCase(testcase);
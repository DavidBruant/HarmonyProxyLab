wrapTestObject(function testcase() {
    try {
        var arr = wrapTestObject([
                0,
                1,
                2
            ]);
        Object.defineProperty(Array.prototype, 'protoProperty', wrapTestObject({
            get: wrapTestObject(function () {
                return 'protoArray';
            }),
            configurable: true
        }));
        var result = Object.getOwnPropertyNames(arr);
        for (var p in result) {
            if (result[p] === 'protoProperty') {
                return false;
            }
        }
        return true;
    } finally {
        delete Array.prototype.protoProperty;
    }
});
runTestCase(testcase);
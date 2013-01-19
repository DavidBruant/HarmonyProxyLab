var testcase = wrapTestObject(function testcase() {
        var arrProtoLen;
        var arr = wrapTestObject([
                0,
                1,
                2
            ]);
        try {
            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;
            Object.defineProperty(arr, '2', wrapTestObject({ configurable: false }));
            Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 1 }) }));
            return false;
        } catch (e) {
            var desc = Object.getOwnPropertyDescriptor(arr, 'length');
            return e instanceof TypeError && desc.value === 3 && desc.writable && !desc.enumerable && !desc.configurable;
        } finally {
            Array.prototype.length = arrProtoLen;
        }
    });
runTestCase(testcase);
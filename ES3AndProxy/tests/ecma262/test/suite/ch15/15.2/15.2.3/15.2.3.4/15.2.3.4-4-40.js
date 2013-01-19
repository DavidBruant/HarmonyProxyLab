var testcase = wrapTestObject(function testcase() {
        try {
            var str = wrapTestObject(new String('abc'));
            String.prototype.protoProperty = 'protoString';
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
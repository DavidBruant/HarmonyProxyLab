var testcase = wrapTestObject(function testcase() {
        var base = wrapTestObject(function base() {
            });
        var b = wrapTestObject(new base());
        var d = Object.create(b);
        if (Object.getPrototypeOf(d) === b && b.isPrototypeOf(d) === true) {
            return true;
        }
    });
runTestCase(testcase);
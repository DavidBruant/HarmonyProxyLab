var testcase = wrapTestObject(function testcase() {
        var foo = wrapTestObject(function foo() {
            });
        foo.x = 1;
        var a = Object.keys(foo);
        if (a.length === 1 && a[0] === 'x') {
            return true;
        }
    });
runTestCase(testcase);
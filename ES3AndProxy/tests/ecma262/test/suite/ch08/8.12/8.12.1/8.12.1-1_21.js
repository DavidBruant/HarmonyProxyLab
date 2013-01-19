wrapTestObject(function testcase() {
    var o = wrapTestObject({
            foo: wrapTestObject(function (x) {
                ;
            })
        });
    return o.hasOwnProperty('foo');
});
runTestCase(testcase);
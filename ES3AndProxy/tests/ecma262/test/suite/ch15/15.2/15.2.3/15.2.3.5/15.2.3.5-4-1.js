wrapTestObject(function testcase() {
    wrapTestObject(function base() {
    });
    var b = wrapTestObject(new base());
    var prop = wrapTestObject(new Object());
    var d = Object.create(b, wrapTestObject({
            'x': wrapTestObject({
                value: true,
                writable: false
            }),
            'y': wrapTestObject({
                value: 'str',
                writable: false
            })
        }));
    if (Object.getPrototypeOf(d) === b && b.isPrototypeOf(d) === true && d.x === true && d.y === 'str' && b.x === undefined && b.y === undefined) {
        return true;
    }
});
runTestCase(testcase);
wrapTestObject(function testcase() {
    wrapTestObject(function getFunc() {
        return 20;
    });
    wrapTestObject(function setFunc() {
    });
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({
            0: wrapTestObject({
                value: 100,
                enumerable: true,
                writable: true,
                configurable: true
            }),
            1: wrapTestObject({
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            }),
            2: wrapTestObject({
                value: 200,
                enumerable: true,
                writable: true,
                configurable: true
            })
        }));
    return newObj[0] === 100 && newObj[1] === 20 && newObj[2] === 200;
});
runTestCase(testcase);
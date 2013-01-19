var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({ writable: false }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ writable: false }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, false, false);
    });
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var obj1 = wrapTestObject({ length: 10 });
        obj.foo = obj1;
        var obj2 = wrapTestObject({ length: 20 });
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: obj2 }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', obj2, true, true, true);
    });
runTestCase(testcase);
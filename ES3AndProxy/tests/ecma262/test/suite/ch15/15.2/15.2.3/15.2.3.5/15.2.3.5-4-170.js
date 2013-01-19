var testcase = wrapTestObject(function testcase() {
        try {
            Math.value = 'MathValue';
            var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: Math }));
            return newObj.prop === 'MathValue';
        } finally {
            delete Math.value;
        }
    });
runTestCase(testcase);
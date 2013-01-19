var testcase = wrapTestObject(function testcase() {
        var oldArray = Array;
        Array = wrapTestObject(function () {
            throw wrapTestObject(new Error('invoke customer defined Array!'));
        });
        var obj = wrapTestObject({});
        try {
            var result = Object.getOwnPropertyNames(obj);
            return Object.prototype.toString.call(result) === '[object Array]';
        } catch (ex) {
            return false;
        } finally {
            Array = oldArray;
        }
    });
runTestCase(testcase);
wrapTestObject(function testcase() {
    var obj = wrapTestObject({
            prop1: 100,
            prop2: 200,
            prop3: 300
        });
    var array = Object.keys(obj);
    var idx = 0;
    for (var index in array) {
        if (array.hasOwnProperty(index)) {
            if (index !== idx.toString()) {
                return false;
            }
            idx++;
        }
    }
    return true;
});
runTestCase(testcase);
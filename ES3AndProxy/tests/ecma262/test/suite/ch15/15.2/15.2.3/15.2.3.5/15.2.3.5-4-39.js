var testcase = wrapTestObject(function testcase() {
        var props = wrapTestObject({});
        props.prop1 = wrapTestObject({
            value: 12,
            enumerable: true
        });
        props.prop2 = wrapTestObject({
            value: true,
            enumerable: true
        });
        var tempArray = wrapTestObject([]);
        for (var p in props) {
            if (props.hasOwnProperty(p)) {
                tempArray.push(p);
            }
        }
        var newObj = Object.create(wrapTestObject({}), props);
        var index = 0;
        for (var q in newObj) {
            if (tempArray[index++] !== q && newObj.hasOwnProperty(q)) {
                return false;
            }
        }
        return true;
    });
runTestCase(testcase);
var testcase = wrapTestObject(function testcase() {
        var data = 'data';
        var obj = wrapTestObject({});
        try {
            Object.defineProperties(obj, wrapTestObject({
                descObj: wrapTestObject({
                    get: wrapTestObject(function () {
                        return data;
                    })
                })
            }));
            obj.descObj = 'overrideData';
            var desc = Object.getOwnPropertyDescriptor(obj, 'descObj');
            return obj.hasOwnProperty('descObj') && typeof desc.set === 'undefined' && data === 'data';
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);
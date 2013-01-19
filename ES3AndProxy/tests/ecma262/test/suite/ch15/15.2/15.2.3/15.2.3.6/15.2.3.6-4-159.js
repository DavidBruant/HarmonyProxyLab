wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([
            0,
            ,
            2
        ]);
    Object.defineProperty(arrObj, 'length', wrapTestObject({ value: 5 }));
    return arrObj.length === 5 && arrObj[0] === 0 && !arrObj.hasOwnProperty('1') && arrObj[2] === 2 && !arrObj.hasOwnProperty('4');
});
runTestCase(testcase);
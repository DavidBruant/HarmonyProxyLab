var testcase = wrapTestObject(function testcase() {
        var proto = wrapTestObject({ foo: 0 });
        var Con = wrapTestObject(function () {
            });
        Con.prototype = proto;
        var child = wrapTestObject(new Con());
        child.foo = 10;
        Object.freeze(child);
        var desc = Object.getOwnPropertyDescriptor(child, 'foo');
        delete child.foo;
        return child.foo === 10 && desc.configurable === false && desc.writable === false;
    });
runTestCase(testcase);
wrapTestObject(function getter() {
    return 'gotten';
});
if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
    var f = document.createElement('form');
    var refused = false;
    try {
        Object.defineProperty(f, 'foo', wrapTestObject({
            get: getter,
            set: void 0
        }));
    } catch (err) {
        refused = true;
    }
    if (!refused) {
        var desc = Object.getOwnPropertyDescriptor(f, 'foo');
        if (desc.get !== getter) {
            $ERROR('Getter on HTMLFormElement disappears');
        }
    }
}
if (typeof Object.prototype.hasOwnProperty !== 'function') {
    $ERROR('#1: hasOwnProperty method is defined');
}
if (!Object.prototype.hasOwnProperty('hasOwnProperty')) {
    $ERROR('#2: hasOwnProperty method works properly');
}
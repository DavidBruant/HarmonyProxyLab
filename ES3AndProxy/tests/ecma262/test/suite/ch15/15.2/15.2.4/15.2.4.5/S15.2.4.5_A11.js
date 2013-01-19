if (!Object.prototype.hasOwnProperty.hasOwnProperty('length')) {
    $ERROR('#1: The length property of the toObject method is 1');
}
if (Object.prototype.hasOwnProperty.length !== 1) {
    $ERROR('#2: The length property of the toObject method is 1');
}
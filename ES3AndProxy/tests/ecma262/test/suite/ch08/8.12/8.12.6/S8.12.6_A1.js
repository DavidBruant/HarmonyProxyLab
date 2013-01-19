var __obj = wrapTestObject({ fooProp: 'fooooooo' });
if (!('fooProp' in __obj)) {
    $ERROR('#1: var __obj={fooProp:"fooooooo"}; "fooProp" in __obj');
}
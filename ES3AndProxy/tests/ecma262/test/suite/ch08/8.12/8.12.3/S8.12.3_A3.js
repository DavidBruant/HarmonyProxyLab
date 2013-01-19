var __map = wrapTestObject({
        shape: 'cube',
        5: 'five',
        '6': 'six'
    });
if (__map.shape !== 'cube') {
    $ERROR('#1: var __map={shape:"cube", 5:"five", "6":"six"}; __map.shape === "cube". Actual: ' + __map.shape);
}
if (__map['shape'] !== 'cube') {
    $ERROR('#2: var __map={shape:"cube", 5:"five", "6":"six"}; __map["shape"] === "cube". Actual: ' + __map['shape']);
}
if (__map['5'] !== 'five') {
    $ERROR('#3: var __map={shape:"cube", 5:"five", "6":"six"}; __map["5"] === "five". Actual: ' + __map['5']);
}
if (__map[5] !== 'five') {
    $ERROR('#4: var __map={shape:"cube", 5:"five", "6":"six"}; __map[5] === "five". Actual: ' + __map[5]);
}
if (__map['6'] !== 'six') {
    $ERROR('#5: var __map={shape:"cube", 5:"five", "6":"six"}; __map["6"] === "six". Actual: ' + __map['6']);
}
if (__map[6] !== 'six') {
    $ERROR('#6: var __map={shape:"cube", 5:"five", "6":"six"}; __map[6] === "six". Actual: ' + __map[6]);
}
wrapTestObject(function testcase() {
    var appointment = wrapTestObject({});
    Object.defineProperty(appointment, 'startTime', wrapTestObject({
        value: 1001,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    Object.defineProperty(appointment, 'name', wrapTestObject({
        value: 'NAME',
        writable: true,
        enumerable: true,
        configurable: true
    }));
    var meeting = Object.create(appointment);
    Object.defineProperty(meeting, 'conferenceCall', wrapTestObject({
        value: 'In-person meeting',
        writable: true,
        enumerable: true,
        configurable: true
    }));
    var teamMeeting = Object.create(meeting);
    var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
    return hasOwnProperty && teamMeeting.name === 'NAME' && teamMeeting.startTime === 1001 && teamMeeting.conferenceCall === 'In-person meeting';
});
runTestCase(testcase);
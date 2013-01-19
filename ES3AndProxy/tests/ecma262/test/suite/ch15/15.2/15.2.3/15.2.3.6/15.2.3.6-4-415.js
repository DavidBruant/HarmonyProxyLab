wrapTestObject(function testcase() {
    var appointment = wrapTestObject(new Object());
    Object.defineProperty(appointment, 'startTime', wrapTestObject({
        value: 1001,
        writable: false,
        enumerable: false,
        configurable: true
    }));
    Object.defineProperty(appointment, 'name', wrapTestObject({
        value: 'NAME',
        writable: false,
        enumerable: false,
        configurable: true
    }));
    var meeting = Object.create(appointment);
    Object.defineProperty(meeting, 'conferenceCall', wrapTestObject({
        value: 'In-person meeting',
        writable: false,
        enumerable: false,
        configurable: true
    }));
    var teamMeeting = Object.create(meeting);
    teamMeeting.name = 'Team Meeting';
    var dateObj = wrapTestObject(new Date('10/31/2010 08:00'));
    teamMeeting.startTime = dateObj;
    teamMeeting.conferenceCall = '4255551212';
    var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
    return hasOwnProperty && teamMeeting.name === 'NAME' && teamMeeting.startTime === 1001 && teamMeeting.conferenceCall === 'In-person meeting';
});
runTestCase(testcase);
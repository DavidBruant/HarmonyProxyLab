wrapTestObject(function testcase() {
    var appointment = wrapTestObject({});
    var data1 = 1001;
    Object.defineProperty(appointment, 'startTime', wrapTestObject({
        get: wrapTestObject(function () {
            return data1;
        }),
        enumerable: false,
        configurable: false
    }));
    var data2 = 'NAME';
    Object.defineProperty(appointment, 'name', wrapTestObject({
        get: wrapTestObject(function () {
            return data2;
        }),
        enumerable: false,
        configurable: true
    }));
    var meeting = Object.create(appointment);
    var data3 = 'In-person meeting';
    Object.defineProperty(meeting, 'conferenceCall', wrapTestObject({
        get: wrapTestObject(function () {
            return data3;
        }),
        enumerable: false,
        configurable: false
    }));
    var teamMeeting = Object.create(meeting);
    teamMeeting.name = 'IE Team Meeting';
    var dateObj = wrapTestObject(new Date('10/31/2010 08:00'));
    teamMeeting.startTime = dateObj;
    teamMeeting.conferenceCall = '4255551212';
    var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
    return hasOwnProperty && teamMeeting.name === 'NAME' && teamMeeting.startTime === 1001 && teamMeeting.conferenceCall === 'In-person meeting';
});
runTestCase(testcase);
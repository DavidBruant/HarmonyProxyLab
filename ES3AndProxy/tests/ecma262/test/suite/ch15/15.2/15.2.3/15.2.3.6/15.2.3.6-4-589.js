var testcase = wrapTestObject(function testcase() {
        var appointment = wrapTestObject({});
        var data1 = 1001;
        Object.defineProperty(appointment, 'startTime', wrapTestObject({
            get: wrapTestObject(function () {
                return data1;
            }),
            set: wrapTestObject(function (value) {
                data1 = value;
            }),
            enumerable: true,
            configurable: true
        }));
        var data2 = 'NAME';
        Object.defineProperty(appointment, 'name', wrapTestObject({
            get: wrapTestObject(function () {
                return data2;
            }),
            set: wrapTestObject(function (value) {
                data2 = value;
            }),
            enumerable: true,
            configurable: false
        }));
        var meeting = Object.create(appointment);
        var data3 = 'In-person meeting';
        Object.defineProperty(meeting, 'conferenceCall', wrapTestObject({
            get: wrapTestObject(function () {
                return data3;
            }),
            set: wrapTestObject(function (value) {
                data3 = value;
            }),
            enumerable: true,
            configurable: false
        }));
        var teamMeeting = Object.create(meeting);
        teamMeeting.name = 'Team Meeting';
        var dateObj = wrapTestObject(new Date('10/31/2010 08:00'));
        teamMeeting.startTime = dateObj;
        teamMeeting.conferenceCall = '4255551212';
        var hasOwnProperty = !teamMeeting.hasOwnProperty('name') && !teamMeeting.hasOwnProperty('startTime') && !teamMeeting.hasOwnProperty('conferenceCall');
        return hasOwnProperty && teamMeeting.name === 'Team Meeting' && teamMeeting.startTime === dateObj && teamMeeting.conferenceCall === '4255551212';
    });
runTestCase(testcase);
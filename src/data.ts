/*
    Test input data
*/
export const testInput = [
    'Writing Fast Tests Against Enterprise Rails 60min',
    'Overdoing it in Python 45min',
    'Lua for the Masses 30min',
    'Ruby Errors from Mismatched Gem Versions 45min',
    'Common Ruby Errors 45min',
    'Rails for Python Developers lightning',
    'Communicating Over Distance 60min',
    'Accounting-Driven Development 45min',
    'Woah 30min',
    'Sit Down and Write 30min',
    'Pair Programming vs Noise 45min',
    'Rails Magic 60min',
    'Ruby on Rails: Why We Should Move On 60min',
    'Clojure Ate Scala (on my project) 45min',
    'Programming in the Boondocks of Seattle 30min',
    'Ruby vs. Clojure for Back-End Development 30min',
    'Ruby on Rails Legacy App Maintenance 60min',
    'A World Without HackerNews 30min',
    'User Interface CSS in Rails Apps 30min',
];

/*
    Sorted test input (for the unit tests purpose)
*/
export const testInputSorted = [
    'Rails for Python Developers lightning',
    'Lua for the Masses 30min',
    'Woah 30min',
    'Sit Down and Write 30min',
    'Programming in the Boondocks of Seattle 30min',
    'Ruby vs. Clojure for Back-End Development 30min',
    'A World Without HackerNews 30min',
    'User Interface CSS in Rails Apps 30min',
    'Overdoing it in Python 45min',
    'Ruby Errors from Mismatched Gem Versions 45min',
    'Common Ruby Errors 45min',
    'Accounting-Driven Development 45min',
    'Pair Programming vs Noise 45min',
    'Clojure Ate Scala (on my project) 45min',
    'Writing Fast Tests Against Enterprise Rails 60min',
    'Communicating Over Distance 60min',
    'Rails Magic 60min',
    'Ruby on Rails: Why We Should Move On 60min',
    'Ruby on Rails Legacy App Maintenance 60min'
];

export const testExpectedOutput = {
    track1: [
        '09:00AM Writing Fast Tests Against Enterprise Rails 60min',
        '10:00AM Overdoing it in Python 45min',
        '10:45AM Lua for the Masses 30min',
        '11:15AM Ruby Errors from Mismatched Gem Versions 45min',
        '12:00PM Lunch',
        '01:00PM Ruby on Rails: Why We Should Move On 60min',
        '02:00PM Common Ruby Errors 45min',
        '02:45PM Pair Programming vs Noise 45min',
        '03:30PM Programming in the Boondocks of Seattle 30min',
        '04:00PM Ruby vs. Clojure for Back-End Development 30min',
        '04:30PM User Interface CSS in Rails Apps 30min',
        '05:00PM Networking Event'
    ],
    track2: [
        '09:00AM Communicating Over Distance 60min',
        '10:00AM Rails Magic 60min',
        '11:00AM Woah 30min',
        '11:30AM Sit Down and Write 30min',
        '12:00PM Lunch',
        '01:00PM Accounting-Driven Development 45min',
        '01:45PM Clojure Ate Scala (on my project) 45min',
        '02:30PM A World Without HackerNews 30min',
        '03:00PM Ruby on Rails Legacy App Maintenance 60min',
        '04:00PM Rails for Python Developers lightning',
        '05:00PM Networking Event'
    ]
};

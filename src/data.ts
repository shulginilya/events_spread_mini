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
        '9:00 AM Ruby on Rails Legacy App Maintenance 60min',
        '10:00 AM Ruby on Rails: Why We Should Move On 60min',
        '11:00 AM Rails Magic 60min',
        '12:00 PM Lunch',
        '1:00 PM Communicating Over Distance 60min',
        '2:00 PM Writing Fast Tests Against Enterprise Rails 60min',
        '3:00 PM Clojure Ate Scala (on my project) 45min',
        '3:45 PM Pair Programming vs Noise 45min',
        '4:30 PM Accounting-Driven Development 45min',
        '5:00 PM User Interface CSS in Rails Apps 30min'
    ],
    track2: [
        '9:00 AM Accounting-Driven Development 45min',
        '9:45 AM Common Ruby Errors 45min',
        '10:30 AM Ruby Errors from Mismatched Gem Versions 45min',
        '11:15 AM Overdoing it in Python 45min',
        '12:00 PM Lunch',
        '1:00 PM A World Without HackerNews 30min',
        '1:30 PM Ruby vs. Clojure for Back-End Development 30min',
        '2:00 PM Programming in the Boondocks of Seattle 30min',
        '2:30 PM Sit Down and Write 30min',
        '3:00 PM Woah 30min',
        '3:30 PM Lua for the Masses 30min',
        '4:00 PM Rails for Python Developers lightning'
    ]
};

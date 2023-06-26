import moment from 'moment';

export const defineTimeByGivenHours = (hours: number) => {
    const today = moment().startOf('day'); // get the current date
    return today.clone().hour(hours); // set the time to the given hours
};

import { addMinutes, isToday, addDays, isSameDay } from 'date-fns';

 export function validationDate(selectedDate){
    let today = new Date();
    let tomorrow = addDays(today, 1);
    
    const now = new Date();
    let day = isToday(selectedDate);
    let minSelectableTime = addMinutes(now, 60)

    let checkDay = isSameDay(selectedDate, tomorrow)

    if (now.getHours() >= 23) {
        day = true
        minSelectableTime = checkDay ? addMinutes(now, 60) : null
        today = addDays(today, 1);
    }
    return {today, day, minSelectableTime}
};

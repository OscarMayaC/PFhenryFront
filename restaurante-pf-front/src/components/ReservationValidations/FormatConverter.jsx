export function converter(state){
    const newDateFormat = {}

    if(state){
        const dateSelector = state
        const newDate = new Date(dateSelector);
        const dateFormat = newDate.toLocaleDateString('en-CA');
        newDateFormat.date_start = dateFormat
    }

    if(state){
        const timeSelector = state
        const newTime = new Date(timeSelector);
        const timeFormat = newTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        newDateFormat.time_start = timeFormat
    }
    return newDateFormat
}
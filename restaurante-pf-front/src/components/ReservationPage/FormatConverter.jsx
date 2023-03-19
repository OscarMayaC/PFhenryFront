export function converter(state){
    const newDateFormat = {}

    if(state.date_start){
        const dateSelector = state.date_start
        const newDate = new Date(dateSelector);
        const dateFormat = newDate.toLocaleDateString('en-CA');
        newDateFormat.date_start = dateFormat
    }

    if(state.time_start){
        const timeSelector = state.time_start
        const newTime = new Date(timeSelector);
        const timeFormat = newTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        newDateFormat.time_start = timeFormat
    }
    return newDateFormat
}
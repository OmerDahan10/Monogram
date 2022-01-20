


export function timeSince(timestamp){
    let time = Date.now() - timestamp;
    time = Math.floor(time /1000 / 60);
    if(time < 1) return '1 MINUTE AGO';
    if(time > 1 && time < 60) return `${time} MINUTES AGO`;
    if (time > 60 && time < 1440) return `${Math.floor(time / 60)} HOURS AGO`;
    else return `${Math.floor(time/60/24)} DAYS AGO`;
}
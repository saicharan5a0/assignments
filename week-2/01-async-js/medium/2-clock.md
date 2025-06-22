Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(()=>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    const ampm = hours>=12 ? "PM": "AM';
    hours = hours%12;
    hours = hours ? hours: 12;
    hours = String(hours).padStart(2,'0');
    console.log(${hours}:${minutes}::${seconds} ${ampm});
},1000)
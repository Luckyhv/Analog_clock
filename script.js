function time(){
    d=new Date();
    hours=d.getHours();
    minutes=d.getMinutes();
    seconds=d.getSeconds();
    hrot=30*hours + minutes/2;
    mrot=6*minutes;
    srot=6*seconds;

    hour.style.transform= `rotate(${hrot}deg)`;
    minute.style.transform= `rotate(${mrot}deg)`;
    second.style.transform= `rotate(${srot}deg)`;
}
setInterval(time,1000)
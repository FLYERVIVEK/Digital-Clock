let date,hour,min,sec,a;
setInterval(() => {
 a = new Date();
hour = a.getHours();
min = a.getMinutes();
sec = a.getSeconds();
const per = document.getElementById('time4')
if(hour>12){
    per.innerHTML = ("PM");
    hour = hour - 12;
}
document.getElementById('time1').innerHTML =hour;
document.getElementById('time2').innerHTML =min;
document.getElementById('time3').innerHTML =sec;
}, 1000)
var time_el = document.getElementById('time_el');

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
time_el.innerHTML = hour+':'+min+':'+sec;
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
/* Test date variable
console.log(date);
*/
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: "+ sec);

let hrPosition = hr*360/12+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;


function runTheClock(){
// this can affect time when the browser throttles JS
// if we move the date objects into the function it works but you will get a weird animation from the CSS transition property when the seconds hand reach 60 secs where it resets by a full spin around
// remove the follow three lines and then remove the css transition property to avoid this though the animatin won't look as polished
  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}

var interval = setInterval(runTheClock, 1000);

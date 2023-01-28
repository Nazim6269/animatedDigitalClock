/**
 * Author : Nazim Uddin
 * Time : 27th January
 * Description : Animated Digital Clock
 */


window.onload = () =>{
    main();
}


function main() {
 setInterval(function(){
    let date = new Date();
    let h = document.getElementById('hours');
    let m = document.getElementById('minutes');
    let s = document.getElementById('seconds');
    let apm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hDot = document.querySelector('.h_dot');
    let mDot = document.querySelector('.m_dot');
    let sDot = document.querySelector('.s_dot');

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am = (hours>=12) ? 'PM' : 'AM';

    hours = hours >12 ? `${hours - 12}` : hours;
    
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    

    h.innerHTML = `${hours}<br><span>HOURS</span>`;
    m.innerHTML = `${minutes}<br><span>MINUTES</span>`;
    s.innerHTML = `${seconds}<br><span>SECONDS</span>`;
    apm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * hours) / 12; //12 hours clocd
    mm.style.strokeDashoffset = 440 - (440 * minutes) / 60; //60 minutes
    ss.style.strokeDashoffset = 440 - (440 * seconds) / 60;//60 seconds
    
    hDot.style.transform = `rotate(${hours * 30}deg)`;  //360/12 = 30
    mDot.style.transform = `rotate(${minutes * 6}deg)`; //360/60 = 6
    sDot.style.transform = `rotate(${seconds * 6}deg )`; //360/60 = 6
    })
    
}
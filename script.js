const timerON = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const resetTimer = document.querySelector('#reset')
// ===================================

var counter = 0;

let seconds = document.querySelector('#minutes')
let miliseconds= document.querySelector('#seconds')

let second = 0;
let teens = 0;


var Interval ;

timerON.onclick =  function () {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
},

btnStop.onclick = function () {
    return clearInterval(Interval);
}




function startTimer( )
{
    teens++
    
    if( teens <= 9 )
    {
        miliseconds.innerHTML = '0' + teens
    }
    else if ( teens > 9 && teens < 99)
    {
        miliseconds.innerHTML = teens
    } 
    else
    {
        second++
        seconds.innerHTML = '0' + second
        teens = 0;
        miliseconds.InnerHTML = teens;
    }
    
    if( second > 9 )
    {
        seconds.innerHTML = second
    } else if (second > 99){
        second = "00";
        seconds.innerHTML = second
    }
}

resetTimer.onclick = function () {
    clearInterval(Interval)
    second = "00";
    teens = "00";
    seconds.innerHTML = second;
    miliseconds.innerHTML = teens; 
}

console.log('OLÁ DEVS!!')
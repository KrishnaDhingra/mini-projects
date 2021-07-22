let btn_start = document.getElementById("start")
let btn_stop = document.getElementById("stop")
let btn_reset = document.getElementById("reset")

var secs = 1
var mins = secs * 60
var hours = mins * 60
var i = 0

let start = () =>{
    
    let h = Math.floor(i / hours)
    let m = Math.floor((i % hours) / mins)
    let s = Math.floor((i % mins) / secs)

    if(h < 10){
        document.getElementById("hours").innerHTML = "0" + h
    }else{
        document.getElementById("hours").innerHTML = h
    }

    if(m < 10){
        document.getElementById("mins").innerHTML = "0" + m
    }else{
        document.getElementById("mins").innerHTML = m
    }

    if(s < 10){
        document.getElementById("secs").innerHTML = "0" + s
    }else{
        document.getElementById("secs").innerHTML = s
    }
    
    i++
    
    go = setTimeout(start, 1000)
       
}

let reset = () =>{
    clearInterval(go)
    i = 0
    document.getElementById("hours").innerHTML = '00'
    document.getElementById("mins").innerHTML = '00'
    document.getElementById("secs").innerHTML = '00'
}

let stop = () =>{

    clearInterval(go)
}

btn_start.addEventListener("click", start)
btn_stop.addEventListener("click", stop)
btn_reset.addEventListener("click", reset)
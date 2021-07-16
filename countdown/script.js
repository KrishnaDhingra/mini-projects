let day_show = document.getElementById("day")
let hours_show = document.getElementById("hour")
let mins_show = document.getElementById("min")
let secs_show = document.getElementById("sec")
let cur_days = document.getElementById("cur_days")
let cur_hours = document.getElementById("cur_hours")
let cur_mins = document.getElementById("cur_mins")
let cur_secs = document.getElementById("cur_secs")
let ask_container = document.getElementById("ask_container")
let main_container = document.getElementById("main_container")
let start = document.getElementById("okay")
let up_days = document.getElementById("up_days")
let down_days = document.getElementById("down_days")
let up_hours = document.getElementById("up_hours")
let down_hours = document.getElementById("down_hours")
let up_mins = document.getElementById("up_mins")
let down_mins = document.getElementById("down_mins")
let up_secs = document.getElementById("up_secs")
let down_secs = document.getElementById("down_secs")
let stop = document.getElementById("stop")
let resume = document.getElementById("resume")
let reset = document.getElementById("reset")


main_container.style.display = "none"

let seconds = 1000
let minutes = seconds * 60
let hours = minutes * 60
let days = hours * 24
let a = 0
let b = 0
let c = 0
let x = 0

const set = () =>{
    id = event.srcElement.id
    
    if(id == "up_days"){
        a+=1
    }else if(id == "down_days"){
        if(a == 0){
            alert("You cannot go lower than 0")
        }else{
            
            a-=1
        }
    }else if(id == "up_hours"){
        b+=1
    }else if(id == "down_hours"){
        if(b == 0){
            alert("You cannot go lower than 0")
        }else{
            
            b-=1
        }
    }else if(id == "up_mins"){
        c+=1
    }else if(id == "down_mins"){
        if(c == 0){
            alert("You cannot go lower than 0")
        }else{

            c-=1
        }
    }else if(id == "up_secs"){
        x+=1
    }else{
        if(x == 0){
            alert("You cannot go lower than 0")
        }else{
            
            x-=1
        }
    }
    
    a < 10 ? cur_days.innerHTML = `0${a}` : cur_days.innerHTML = a
    b < 10 ? cur_hours.innerHTML = `0${b}` : cur_hours.innerHTML = b
    c < 10 ? cur_mins.innerHTML = `0${c}` : cur_mins.innerHTML = c
    x < 10 ? cur_secs.innerHTML = `0${x}` : cur_secs.innerHTML = x
    
}

variables = [up_days, down_days, up_hours, down_hours, up_mins, down_mins, up_secs, down_secs]

variables.forEach(element => {
    element.addEventListener("click", set)
    
});



const calculate = () =>{

    if(cur_days.innerHTML == '00' && cur_hours.innerHTML == '00' && cur_mins.innerHTML =='00' && cur_secs.innerHTML == '00'){
        alert("Timer should be greater than 0 seconds")
    }else{

        main_container.style.display = "inline-block"
        ask_container.style.display = "none"
    
        let s_mili = 1000
        let m_mili = s_mili * 60
        let h_mili = m_mili * 60
        let d_mili = h_mili * 24
        
        let days_mili = +cur_days.innerHTML * d_mili
        let hours_mili = +cur_hours.innerHTML * h_mili
        let mins_mili = +cur_mins.innerHTML * m_mili
        let secs_mili = +cur_secs.innerHTML * s_mili
    
        destination = days_mili + hours_mili + mins_mili + secs_mili    
        time_left = destination
    
        globalThis
        let hello = setInterval(() => {
            
            time_left -= 1000
    
            d = Math.floor(time_left / days)
            h = Math.floor((time_left % days) / hours)
            m = Math.floor((time_left % hours) / minutes)
            s = Math.floor((time_left % minutes) / seconds)
            
            d < 10 ? day_show.innerHTML = `0${d}` : day_show.innerHTML = d
            h < 10 ? hours_show.innerHTML = `0${h}` : hours_show.innerHTML = h
            m < 10 ? mins_show.innerHTML = `0${m}` : mins_show.innerHTML = m
            s < 10 ? secs_show.innerHTML = `0${s}` : secs_show.innerHTML = s
    
            if(day_show.innerHTML == "00" && hours_show.innerHTML == "00" && mins_show.innerHTML == "00" && secs_show.innerHTML == "00"){
                clearInterval(hello)
            }
    
        }, 1000);
        
        stop.addEventListener("click", () =>{
            clearInterval(hello)
        })

        reset.addEventListener("click", () =>{
            clearInterval(hello)
            main_container.style.display = "none"
            ask_container.style.display = "block"
    
        })
    }
    
}

start.addEventListener("click", calculate)

let increaseit = () => {
    tag = document.getElementById("count")
    current = tag.innerHTML
    current = Number(current)

    if(current > -1){
        document.getElementById("count").style.color = "green"

    }else if(current == -1){
        document.getElementById("count").style.color = "black"
    }

    else{
        document.getElementById("count").style.color = "red"
    }
    next_number = current + 1
    console.log(next_number)
    tag.innerHTML = next_number
}
let decreaseit = () => {
    tag = document.getElementById("count")
    current = tag.innerHTML
    current = Number(current)

    if(current > 0){
        document.getElementById("count").style.color = "green"
        
    }else if(current == 0){
        document.getElementById("count").style.color = "black"

    }

    else{
        document.getElementById("count").style.color = "red"
    }
    next_number = current - 1
    console.log(next_number)
    tag.innerHTML = next_number
}
let resetit = () => {
    tag = document.getElementById("count")
    current = tag.innerHTML
    tag.innerHTML = 0
    document.getElementById("count").style.color = "black"
}
document.getElementById("increase").addEventListener("click", increaseit)
document.getElementById("decrease").addEventListener("click", decreaseit)
document.getElementById("reset").addEventListener("click", resetit)
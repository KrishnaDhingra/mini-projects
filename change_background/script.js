const changecolour = () => {
    globalThis
    let colour_array
    colour_array = ["red", "blue", "green", "yellow", "orange", "pink", "purple", "indigo", "brown", "khaki", "aqua", "gold", "grey"]

    globalThis
    var number


    var randomcolour = () => {   
        number = Math.floor(Math.random() * colour_array.length)

        // if(number > 5){
        //     number -= 4

        // }
        // if(number < 1){

        //     number += 1

        // }

    }

    randomcolour()

    globalThis
    let colour
    colour = colour_array[number]
    console.log(colour)

    document.getElementById("container").style.backgroundColor = colour
    document.getElementById("click").style.backgroundColor = colour
    document.getElementById("colour").innerHTML = colour
    document.getElementById("colour").style.color = colour

    
}

let button = document.getElementById("click")
button.addEventListener("click", changecolour)





you_picked = null
comp_picked = null
container1 = document.getElementById("container1")
container2 = document.getElementById("container2")
options = document.querySelectorAll(".pick")
score_count = document.getElementById("score_count")
score_count2 = document.getElementById("score_count2")
you_choosed = document.getElementById("you_choosed")
comp_choosed = document.getElementById("comp_choosed")
play_again = document.getElementById("play_again")
result = document.getElementById("result")
array = ['rock', 'paper', 'scissors']
score = 0

options.forEach(option => {
    option.addEventListener("click", (e) =>{

        container1.style.display = "none"
        container2.style.dislay = "flex"

        option_picked = e.target.innerText.toLowerCase()
        comp_picked = array[Math.floor(Math.random() * array.length)]
        console.log(option_picked)
        console.log(comp_picked)

        if(option_picked == 'rock'){
            if(comp_picked == 'scissors'){
                text = "You won"
                score++
            }else if(comp_picked == 'paper'){
                score = score
                text = "You lost"
            }else{
                score = score
                text = "It's a tie"
            }
        }else if(option_picked == 'scissors'){
            if(comp_picked == 'paper'){
                text = "You won"
                score++
            }else if(comp_picked == "rock"){
                score = score
                text = "You lost"
            }else{
                score = score
                text = "It's a tie"
            }
        }else if(option_picked == 'paper'){
            if(comp_picked == 'rock'){
                text = "You won"
                score++
            }else if(comp_picked == 'scissors'){
                score = score
                text = "You lost"
            }else{
                score = score
                text = "It's a tie"
            }
        }else{
            console.log("I don't know what just happened")
        }

        score_count.innerText = score
        score_count2.innerText = score

        you_choosed.innerText = option_picked
        comp_choosed.innerText = comp_picked
        result.innerText = text



    })  
});

play_again.addEventListener("click", () =>{
    container1.style.display = "flex"
    container2.style.dislay = "none"
})
let empty = ""
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "123456789"
let symbols = "!@#$%^&*()_+="

let submit_btn = document.getElementById("submit_btn")
let display_box = document.getElementById("pass_display")

let lower_checkbox = document.getElementById("lower")
let upper_checkbox = document.getElementById("upper")
let numbers_checkbox = document.getElementById("numbers")
let symbols_checkbox = document.getElementById("symbols")

submit_btn.addEventListener("click", () =>{
    
    let initial_password = empty;
    
    (upper_checkbox.checked) ? initial_password+=uppercase : "";
    (lower_checkbox.checked) ? initial_password+=lowercase : "";
    (numbers_checkbox.checked) ? initial_password+=numbers : "";
    (symbols_checkbox.checked) ? initial_password+=symbols : "";
    
    let p_len = +document.getElementById("len_input").value
    display_box.innerHTML = generate_password(p_len, initial_password)
    

})

let generate_password = (l, initial_password) =>{
    let pass = ""

    for(let i = 0; i<l; i++){
        
        pass += initial_password.charAt(Math.floor(Math.random() * initial_password.length));
    }

    return pass
    
}






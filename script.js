
// navbar script
document.querySelector('#mobile_menu').addEventListener('click',modal)

function modal(){
    document.querySelector('#mobile').classList.toggle('is-active');
}


//form script

//  document.getElementById('btn').addEventListener('click',formevent);

function formevent(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == "prathmesh" && password == "admin"){
       document.getElementById('home-btn').style.display = 'block';
    }
    else{
        alert("invalid username or password")
    }
    
}

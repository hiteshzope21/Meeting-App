import { addUser } from "../services/user.js";
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

function validate(){
    return name.trim()!=='' &&  email.trim()!==''&&  password.trim()!=='';
}
async function onResgisteruser(event){
    event.preventDefault();
    const data={
        name:name.trim(),
        email:email.trim(),
        password:password.trim()
    }
    if(validate()){
        try{
        console.log(data);
       await addUser(data);
       alert('registration succesfull');
        }
        catch(error){
            console.log(error);
        }
    }
    else{
        alert("somethings went wrong");
    }
}
function onload(){
    const registerform=document.getElementById("registerform");
    registerform.addEventListener('submit',onResgisteruser)
}

document.addEventListener('DOMContentLoaded',onload);
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    var name = username.value.trim();
    var mail = email.value.trim();
    var pass = password.value.trim();
    var cpass = cpassword.value.trim();

    if(name===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if(mail===''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(mail)){
        setError(email,'Email is Invalid')
    }
    else{
        setSuccess(email)
    }

}
function setError(element,message){
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setError(element){
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = ' ';
    inputGroup.classList.remove('error');
    inputGroup.classList.add('success');
}
function validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);     
}
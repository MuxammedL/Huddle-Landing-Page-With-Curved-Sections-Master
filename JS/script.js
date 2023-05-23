const input1=document.querySelector('#email');
const button1=document.querySelector('.checker');


function error(input){
    input.className='invalid';
    const div=input.nextElementSibling;
    div.innerText='Check your email please';
    div.className='invalid-feedback';
}
function succes(input){
    input.className='';
    const div=input.nextElementSibling;
    div.innerText='';
    div.className='invalid-feedback';
}

const validateEmail = (input1) => {
    return String(input1)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

button1.addEventListener("submit",function(e){
    e.preventDefault();
    if(!validateEmail(input1.value)){
        error(input1);
    }else{
        succes(input1)
    }
})


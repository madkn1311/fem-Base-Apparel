const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = email.value;

    if(!validEmail(inputValue)){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
    }
});

function validEmail(email){
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
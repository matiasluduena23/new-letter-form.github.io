
const email = document.querySelector('input[type="email"]');
const btn = document.querySelector('input[type="button"]');
const form = document.querySelector('form');
const span = form.querySelector('span');

console.log(window.location);

btn.addEventListener('click' , (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();
  
  if(emailValue === "" || !isEmail(emailValue)){
    span.innerHTML = "Valid Email required";
    form.classList.add('error');
  }else {
    form.classList.remove('error');
    span.innerHTML = "";
    window.location.href = 'http://localhost:3000/success';
  }

})


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
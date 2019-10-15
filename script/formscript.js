const name = document.getElementById('name');
const mail = document.getElementById('mail');
const form = document.getElementById('contact-form');
const nameError = document.getElementById('errorname');
const mailError = document.getElementById('errormail');


const nameTest = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
const emailTest = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


form.addEventListener('submit', (e) => {
	var int = 0;
	//name validation
	if (!nameTest.test(name.value)) {
		++int;
		nameError.innerText = 'Name is not valid. Ex: Firstname Lastname';
	}
	else {nameError.innerText = '';}

	//email validation
	if (!emailTest.test(mail.value)){
		++int;
		mailError.innerText = 'Email is is not valid. Ex: me@domain.com'
	}
	else {mailError.innerText = '';}

	//result
	if (int == 0) {
		form.reset();
		document.getElementById('confirmation').innerText = 'Thank you!';
	}
	else {document.getElementById('confirmation').innerText = '';}
	e.preventDefault();
});